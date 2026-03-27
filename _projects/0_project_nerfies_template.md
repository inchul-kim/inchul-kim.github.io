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
# For mixed institutions with numeric superscripts, use this shape instead:
# affiliations:
#   - id: 1
#     name: KAIST
#   - id: 2
#     name: Collaborator Lab
# authors:
#   - name: First Author
#     self: true
#     affiliation_ids: [1]
#   - name: Second Author
#     affiliation_ids: [1, 2]
#   - name: Third Author
#     affiliation_ids: [2]
venue: "CVPR 2026"
author_notes:
  - symbol: "*"
    text: Equal contribution.
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
# teaser_image_dark: /assets/publication/[PROJECT_TAG]/teaser_dark.svg # optional dark-theme variant
# teaser_image_mobile: /assets/publication/[PROJECT_TAG]/teaser_mobile.png # optional mobile fallback
# teaser_image_dark_mobile: /assets/publication/[PROJECT_TAG]/teaser_dark_mobile.png # optional mobile dark fallback
# teaser_pdf: /assets/publication/[PROJECT_TAG]/teaser.pdf
# teaser_pdf_preview: /assets/publication/[PROJECT_TAG]/teaser_page1.png
# teaser_pdf_height: 560
abstract: >
  Paste your abstract here. This renders as the dedicated abstract section.
highlights:
  - "Drop-in field for your main claim."
  - "Add one or two measurable takeaways."
# Show either an `Overview` or `Method` section from frontmatter.
# Set `type` to `overview` or `method`.
feature_section:
  type: overview
  description: >
    Add a brief description for this section. You can use markdown here.
  figures:
    - path: assets/publication/[PROJECT_TAG]/overview.png
      title: Overview figure
      caption: Optional figure caption.
      loading: eager
# Optional Astro-style sections ported to Jekyll:
# highlight_section:
#   title: "Abstract"
#   content: >
#     Put your abstract or key takeaway here. This section is emphasized.
# tabs_section:
#   title: "Qualitative Tabs"
#   tabs:
#     - label: Ground Truth
#       image: assets/publication/[PROJECT_TAG]/gt.png
#       caption: Ground-truth sample.
#     - label: Ours
#       image: assets/publication/[PROJECT_TAG]/ours.png
#       caption: Output from our method.
# carousel_section:
#   title: "More Results"
#   slides:
#     - image: assets/publication/[PROJECT_TAG]/sample1.png
#       caption: Sample 1
#     - image: assets/publication/[PROJECT_TAG]/sample2.png
#       caption: Sample 2
# bootstrap_carousel_section:
#   title: "Image Carousel (Academic Project Template Style)"
#   items:
#     - image: assets/publication/[PROJECT_TAG]/sample1.png
#       caption: First image description.
#     - image: assets/publication/[PROJECT_TAG]/sample2.png
#       caption: Second image description.
# two_columns_section:
#   title: "Video + 3D Viewer"
#   left:
#     youtube_id: wjZofJX0v4M
#     title: Demo video
#   right:
#     model_src: /assets/publication/[PROJECT_TAG]/model.glb
#     alt: Interactive 3D model
#     caption: Drag to orbit the model.
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

## Additional Details

Use this markdown area for anything beyond the frontmatter-driven `Overview/Method` section (for example, ablations, implementation notes, or extra visualizations).

## Results

Use regular markdown sections and include media from `assets/publication/[PROJECT_TAG]/`.

{% raw %}

```liquid
{%
  include project_compare_slider.liquid
  left_image="assets/publication/[PROJECT_TAG]/result_before.png"
  right_image="assets/publication/[PROJECT_TAG]/result_after.png"
  left_label="Baseline"
  right_label="Ours"
  caption="Drag the slider to compare outputs."
  max_width="900px"
%}
```

```liquid
{%
  include project_compare_gallery.liquid
  id="qualitative-gallery"
  examples=page.compare_gallery_examples
  thumb_label="Qualitative comparisons"
  max_width="900px"
%}
```

```liquid
{%
  include project_compare_gallery_astro.liquid
  id="qualitative-gallery-astro"
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

## Newly Added Astro-Style Components (Jekyll Includes)

Use these in the markdown body of your project page:

{% raw %}

```liquid
{%
  include project_highlight_section.liquid
  title="Abstract"
  content=page.abstract
%}
```

```liquid
{%
  include project_tabs.liquid
  id="qual-tabs"
  title="Qualitative Tabs"
  tabs=page.tabs_section.tabs
%}
```

```liquid
{%
  include project_carousel.liquid
  id="result-carousel"
  title="Carousel"
  slides=page.carousel_section.slides
%}
```

```liquid
{%
  include project_bootstrap_carousel.liquid
  id="result-carousel-bootstrap"
  title="Image Carousel (Academic Project Template Style)"
  items=page.bootstrap_carousel_section.items
%}
```

```liquid
{%
  include project_two_columns.liquid
  title="Video + Model"
  left=page.two_columns_section.left
  right=page.two_columns_section.right
%}
```

```liquid
{%
  include project_youtube_video.liquid
  video_id="wjZofJX0v4M"
  aspect_ratio="16 / 9"
%}
```

```liquid
{%
  include project_model_viewer.liquid
  src="/assets/publication/[PROJECT_TAG]/model.glb"
  alt="Interactive model"
  auto_rotate=true
%}
```

```liquid
{% include project_notes.liquid notes=page.author_notes %}
```

```liquid
{%
  include project_wide_figure.liquid
  path="assets/publication/[PROJECT_TAG]/wide_result.png"
  title="Wide qualitative result"
  caption="Use this for visuals that should break out wider than the text column."
%}
```

{% endraw %}

## Acknowledgments

Add funding, collaborators, and template attribution notes here if needed.
