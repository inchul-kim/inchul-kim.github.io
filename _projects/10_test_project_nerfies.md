---
layout: project_nerfies
title: "Test Project Page (Nerfies Style)"
description: "Sandbox page to validate the Nerfies-like project template in this site."
importance: 100
category: work
published: true
permalink: /projects/test-nerfies-page/
img: "assets/publication/[CVPR2023]dual_pixel/dual_pixel.png"
project_kicker: "Template Validation"
project_subtitle: "A test page to verify sections, media, links, and typography."
authors:
  - name: Inchul Kim
    url: /about/
  - name: Test Collaborator
affiliations:
  - KAIST
  - Test Lab
venue: "Internal Demo - March 26, 2026"
project_links:
  - label: Paper
    url: /assets/publication/[CVPR2023]dual_pixel/Kim_CVPR2023_dp_paper.pdf
    icon: fa-solid fa-file-pdf
  - label: Code
    url: https://github.com/nerfies/nerfies.github.io
    icon: fa-brands fa-github
  - label: Demo Video
    url: /assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4
    icon: fa-solid fa-film
teaser_video: "/assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4"
teaser_video_type: video/mp4
teaser_caption: "Local MP4 teaser from existing assets."
abstract: >
  This test page checks that the Nerfies-style layout integrates cleanly with your
  current Jekyll/al-folio setup. It validates frontmatter-driven metadata, action
  links, media embedding, markdown content, and citation rendering.
highlights:
  - "Frontmatter fields map correctly to hero and metadata blocks."
  - "Teaser media and action links render with the scoped stylesheet."
  - "Markdown content and BibTeX display work without touching existing layouts."
citation: |
  @misc{kim2026testpage,
    title={Test Project Page (Nerfies Style)},
    author={Kim, Inchul and Collaborator, Test},
    year={2026},
    note={Website template validation}
  }
related_publications: false
giscus_comments: false
---

## Method

This is a dry-run page to make future project page imports fast.  
You can replace this section with adapted HTML blocks from the reference template.

## Results

The teaser section above should autoplay muted, and this image should load from local assets:

{% include figure.liquid loading="eager" path="assets/publication/[CVPR2023]dual_pixel/dual_pixel_sensor.png" title="Test figure" class="img-fluid rounded z-depth-1" %}

## Notes

When you share the exact repository/page you want to import, we can map each source section to:

1. Frontmatter field (title, links, authors, venue, teaser).
2. Markdown section (abstract/method/results).
3. Optional raw HTML block (custom sliders/videos/interactives).
