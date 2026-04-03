require 'bibtex'

module Jekyll
  class ProjectPublicationMetadataGenerator < Generator
    safe true
    priority :low

    LINK_SPECS = [
      { field: 'pdf', label: 'Paper', icon: 'fa-solid fa-file-pdf', prefix: '/assets/publication/' },
      { field: 'supp', label: 'Supp', icon: 'fa-solid fa-file-pdf', prefix: '/assets/publication/', split: true },
      { field: 'slides', label: 'Slides', icon: 'fa-solid fa-file-pdf', prefix: '/assets/publication/' },
      { field: 'poster', label: 'Poster', icon: 'fa-solid fa-image', prefix: '/assets/pdf/' },
      { field: 'video', label: 'Video', icon: 'fa-solid fa-film' },
      { field: 'code', label: 'Code', icon: 'fa-brands fa-github' },
      { field: 'dataset', label: 'Data', icon: 'fa-solid fa-database' },
      { field: 'website', label: 'Website', icon: 'fa-solid fa-globe' },
      { field: 'html', label: 'HTML', icon: 'fa-solid fa-globe', prefix: '/assets/html/' },
      { field: 'arxiv', label: 'arXiv', icon: 'ai ai-arxiv', formatter: :format_arxiv_url },
      { field: 'doi', label: 'DOI', icon: 'ai ai-doi', formatter: :format_doi_url },
      { field: 'project', label: 'Project', icon: 'fa-solid fa-up-right-from-square', skip_self: true }
    ].freeze

    def generate(site)
      projects = site.collections['projects']
      return unless projects

      bibliography = load_bibliography(site)
      return if bibliography.empty?

      projects.docs.each do |doc|
        key = publication_key(doc)
        next unless key

        entry = bibliography[key]
        unless entry
          Jekyll.logger.warn('ProjectPublicationMetadata:', "missing BibTeX entry '#{key}' for #{doc.relative_path}")
          next
        end

        merge_publication_data(site, doc, entry)
      end
    end

    private

    def publication_key(doc)
      doc.data['publication'] || doc.data['bibtex_key'] || doc.data['citation_key']
    end

    def load_bibliography(site)
      scholar_config = site.config['scholar'] || {}
      source_dir = scholar_config.fetch('source', '/_bibliography/').sub(%r{\A/+}, '')
      bibliography_file = scholar_config.fetch('bibliography', 'papers.bib')
      bibliography_path = site.in_source_dir(source_dir, bibliography_file)

      unless File.exist?(bibliography_path)
        Jekyll.logger.warn('ProjectPublicationMetadata:', "bibliography file not found at #{bibliography_path}")
        return {}
      end

      BibTeX.open(bibliography_path).each_with_object({}) do |entry, entries|
        next unless entry.respond_to?(:key)

        entries[entry.key.to_s] = entry
      end
    end

    def merge_publication_data(site, doc, entry)
      publication_title = field_value(entry, 'title')
      publication_description = field_value(entry, 'summary') || abstract_excerpt(field_value(entry, 'abstract'))
      publication_abstract = field_value(entry, 'abstract')

      doc.data['publication_title'] = publication_title unless publication_title.nil? || publication_title.empty?
      doc.data['publication_description'] = publication_description unless publication_description.nil? || publication_description.empty?
      doc.data['publication_abstract'] = publication_abstract unless publication_abstract.nil? || publication_abstract.empty?

      set_if_blank_or_generated_title(doc, publication_title)
      set_if_blank(doc.data, 'description', publication_description)
      set_if_blank(doc.data, 'abstract', publication_abstract)
      set_if_blank(doc.data, 'citation', entry.to_s.strip)
      set_if_blank(doc.data, 'permalink', field_value(entry, 'project'))
      set_if_blank(doc.data, 'authors', authors_from_entry(entry))

      merge_project_links(doc, entry)
      warn_on_project_mismatch(doc, entry)
    end

    def set_if_blank(data, key, value)
      return if value.nil? || value.to_s.strip.empty?
      return unless blank_value?(data[key])

      data[key] = value
    end

    def set_if_blank_or_generated_title(doc, value)
      return if value.nil? || value.to_s.strip.empty?

      current_title = doc.data['title']
      if blank_value?(current_title) || generated_title?(doc, current_title)
        doc.data['title'] = value
      end
    end

    def blank_value?(value)
      value.nil? || (value.respond_to?(:empty?) && value.empty?)
    end

    def generated_title?(doc, current_title)
      normalized_title = current_title.to_s.strip
      generated_candidates = [
        doc.basename_without_ext.to_s.strip,
        Jekyll::Utils.titleize_slug((doc.data['slug'] || doc.basename_without_ext).to_s)
      ].uniq

      generated_candidates.include?(normalized_title)
    end

    def field_value(entry, field_name)
      value = entry[field_name.to_sym] || entry[field_name.to_s]
      return if value.nil?

      value.to_s.strip
    end

    def abstract_excerpt(abstract)
      return if abstract.nil? || abstract.empty?

      first_sentence = abstract.split(/(?<=[.!?])\s+/).first.to_s.strip
      return if first_sentence.empty?

      first_sentence.length > 220 ? "#{first_sentence[0, 217].rstrip}..." : first_sentence
    end

    def authors_from_entry(entry)
      return unless entry[:author].respond_to?(:to_a)

      authors = entry[:author].to_a.map do |name|
        full_name = [name.first, name.von, name.last, name.jr].compact.join(' ').squeeze(' ').strip
        next if full_name.empty?

        { 'name' => full_name }
      end.compact

      authors.empty? ? nil : authors
    end

    def merge_project_links(doc, entry)
      generated_links = generated_project_links(doc, entry)
      return if generated_links.empty?

      existing_links = Array(doc.data['project_links']).map do |link|
        link.is_a?(Hash) ? link.dup : link
      end

      if existing_links.empty?
        doc.data['project_links'] = generated_links
        return
      end

      generated_links.each do |generated_link|
        match_index = existing_links.find_index do |existing_link|
          next false unless existing_link.is_a?(Hash)

          normalize_label(existing_link['label'] || existing_link[:label]) == normalize_label(generated_link['label']) &&
            blank_value?(existing_link['url'] || existing_link[:url])
        end

        if match_index
          existing_links[match_index]['url'] = generated_link['url']
          existing_links[match_index]['icon'] = generated_link['icon'] if blank_value?(existing_links[match_index]['icon'] || existing_links[match_index][:icon])
        elsif existing_links.none? { |link| link.is_a?(Hash) && normalize_label(link['label'] || link[:label]) == normalize_label(generated_link['label']) }
          existing_links << generated_link
        end
      end

      doc.data['project_links'] = existing_links
    end

    def generated_project_links(doc, entry)
      LINK_SPECS.each_with_object([]) do |spec, links|
        raw_value = field_value(entry, spec[:field])
        next if raw_value.nil? || raw_value.empty?

        values = spec[:split] ? raw_value.split(',').map(&:strip).reject(&:empty?) : [raw_value]

        values.each_with_index do |value, index|
          url = format_link_url(spec, value)
          next if url.nil? || url.empty?
          next if spec[:skip_self] && same_path?(url, doc.data['permalink'])

          label = spec[:label]
          label = "#{label}#{index + 1}" if spec[:split] && index.positive?

          links << {
            'label' => label,
            'url' => url,
            'icon' => spec[:icon]
          }
        end
      end
    end

    def format_link_url(spec, value)
      return send(spec[:formatter], value) if spec[:formatter]
      return value if external_url?(value) || value.start_with?('/')
      return "#{spec[:prefix]}#{value}" if spec[:prefix]

      value
    end

    def format_arxiv_url(value)
      return value if external_url?(value)

      "https://arxiv.org/abs/#{value}"
    end

    def format_doi_url(value)
      return value if external_url?(value)

      "https://doi.org/#{value}"
    end

    def external_url?(value)
      value.include?('://')
    end

    def normalize_label(label)
      normalized = label.to_s.strip.downcase
      return 'paper' if %w[paper pdf].include?(normalized)
      return 'supp' if %w[supp supplement supplementary supplemental].include?(normalized)
      return "supp#{$1}" if normalized.match(/\Asupp(?:lementary)?(\d+)\z/)
      return 'data' if %w[data dataset].include?(normalized)
      return 'doi' if normalized == 'doi'
      return 'code' if normalized == 'code'
      return 'video' if normalized == 'video'
      return 'poster' if normalized == 'poster'
      return 'slides' if normalized == 'slides'
      return 'html' if normalized == 'html'
      return 'website' if normalized == 'website'
      return 'project' if normalized == 'project'
      return 'arxiv' if normalized == 'arxiv'

      normalized
    end

    def warn_on_project_mismatch(doc, entry)
      project_path = field_value(entry, 'project')
      return if project_path.nil? || project_path.empty?
      return if blank_value?(doc.data['permalink'])
      return if same_path?(project_path, doc.data['permalink'])

      Jekyll.logger.warn(
        'ProjectPublicationMetadata:',
        "project URL mismatch for #{doc.relative_path}: page permalink='#{doc.data['permalink']}' bib project='#{project_path}'"
      )
    end

    def same_path?(left, right)
      normalize_path(left) == normalize_path(right)
    end

    def normalize_path(path)
      path.to_s.strip.sub(%r{/*\z}, '/')
    end
  end
end
