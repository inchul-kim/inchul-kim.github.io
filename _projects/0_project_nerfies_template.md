---
layout: project_nerfies
title: "Project Title"
description: "One-line summary for your projects card."
importance: 0
category: work
published: false
img: assets/publication/[PROJECT_TAG]/teaser.jpg
project_kicker: "Conference 2026"
project_subtitle: "Short subtitle that mirrors the top line from the Nerfies template."
authors:
  - name: First Author
    self: true
  - name: Second Author
  - name: Third Author
# Author link behavior:
# - `self: true` keeps your own name unlinked.
# - For others, link is auto-resolved from `_data/coauthors.yml` via name matching.
# - If multiple people share the same name, add either:
#     coauthor_id: unique-id-in-coauthors-yml
#   or
#     coauthor_index: 2  # 1-based index in that last-name group
affiliations:
  - KAIST
  - Collaborator Lab
venue: "CVPR 2026"
images:
  compare: true
project_links:
  - label: Paper
    url: /assets/publication/[PROJECT_TAG]/paper.pdf
    icon: fa-solid fa-file-pdf
  - label: arXiv
    url: https://arxiv.org/abs/0000.00000
    icon: ai ai-arxiv
  - label: Code
    url: https://github.com/yourname/your-repo
    icon: fa-brands fa-github
  - label: Video
    url: /assets/publication/[PROJECT_TAG]/teaser.mp4
    icon: fa-solid fa-film
teaser_video: /assets/publication/[PROJECT_TAG]/teaser.mp4
teaser_video_type: video/mp4
teaser_caption: "Optional teaser caption."
# Use one of the teaser fields below:
# teaser_video: /assets/publication/[PROJECT_TAG]/teaser.mp4
# teaser_image: /assets/publication/[PROJECT_TAG]/teaser.svg # png/jpg/svg all supported
# teaser_pdf: /assets/publication/[PROJECT_TAG]/teaser.pdf
# teaser_pdf_preview: /assets/publication/[PROJECT_TAG]/teaser_page1.png
# teaser_pdf_height: 560
abstract: >
  Paste your abstract here. This renders as the dedicated abstract section.
highlights:
  - "Drop-in field for your main claim."
  - "Add one or two measurable takeaways."
citation: |
  @inproceedings{your2026project,
    title={Project Title},
    author={First Author and Second Author},
    booktitle={Conference},
    year={2026}
  }
related_publications: false
giscus_comments: false
---

## Method

Add your method narrative here. You can write in markdown or paste adapted HTML blocks from the Nerfies page.

## Results

Use regular markdown sections and include media from `assets/publication/[PROJECT_TAG]/`.

{% raw %}

```liquid
{% include project_compare_slider.liquid
  left_image="assets/publication/[PROJECT_TAG]/result_before.png"
  right_image="assets/publication/[PROJECT_TAG]/result_after.png"
  left_label="Baseline"
  right_label="Ours"
  caption="Drag the slider to compare outputs."
  max_width="900px"
%}
```

```liquid
{% include project_compare_gallery.liquid
  id="qualitative-gallery"
  examples=page.compare_gallery_examples
  thumb_label="Qualitative comparisons"
  max_width="900px"
%}
```

{% endraw %}

You can also set a page-level default width in frontmatter:

{% raw %}

```yaml
compare_gallery_max_width: 900px
compare_slider_max_width: 900px
```

{% endraw %}

Add this to frontmatter for thumbnail-based multi-example compare:

{% raw %}

```yaml
compare_gallery_examples:
  - title: Example 1
    left_image: assets/publication/[PROJECT_TAG]/example1_before.png
    right_image: assets/publication/[PROJECT_TAG]/example1_after.png
    thumb: assets/publication/[PROJECT_TAG]/example1_thumb.png
    left_label: Baseline
    right_label: Ours
    caption: Example 1 description.
    divider_position: 50 # initial divider position (0 = all left image, 100 = all right image)
  - title: Example 2
    left_image: assets/publication/[PROJECT_TAG]/example2_before.png
    right_image: assets/publication/[PROJECT_TAG]/example2_after.png
    thumb: assets/publication/[PROJECT_TAG]/example2_thumb.png
    left_label: Baseline
    right_label: Ours
    caption: Example 2 description.
    divider_position: 42
```

{% endraw %}

```html
<video controls autoplay muted loop playsinline>
  <source src="/assets/publication/[PROJECT_TAG]/result.mp4" type="video/mp4" />
</video>
```

## Acknowledgments

Add funding, collaborators, and template attribution notes here if needed.
