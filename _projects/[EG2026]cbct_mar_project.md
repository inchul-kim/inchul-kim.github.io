---
layout: project_nerfies
title: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling"
description: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling"
importance: 100
category: work
published: true
permalink: /projects/eg2026_cbct_mar/
img: "assets/publication/[CVPR2023]dual_pixel/dual_pixel.png"
project_kicker: "Computer Graphics Forum (presented at Eurographics 2026)"
# project_subtitle: "A test page to verify sections, media, links, and typography."
authors:
  - name: Kiseok Choi
  - name: Inchul Kim
    self: true
  - name: Jaemin Cho
  - name: Hyeongjun Cho
  - name: Min H. Kim
    coauthor_index: 1
affiliations:
  - KAIST
  # - Test Lab
# venue: "Aachen, Germany"
images:
  compare: true
project_links:
  - label: Paper
    url: /assets/publication/[EG2026]cbct_mar/CTGS-beamhardening-main.pdf
    icon: fa-solid fa-file-pdf
  - label: Supp
    url: /assets/publication/[EG2026]cbct_mar/CTGS-beamhardening-supple.pdf
    icon: fa-solid fa-file-pdf
  - label: Code
    # url: https://github.com/nerfies/nerfies.github.io
    icon: fa-brands fa-github
  # - label: Demo Video
  #   url: /assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4
  #   icon: fa-solid fa-film
# teaser_video: "/assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4"
# teaser_video_type: video/mp4
# teaser_caption: "Local MP4 teaser from existing assets."
teaser_image: "/assets/publication/[EG2026]cbct_mar/project/teaser.png"
teaser_pdf: "/assets/publication/[EG2026]cbct_mar/project/teaser.pdf"
# teaser_pdf_height: 560
# teaser_caption: "Our pipeline"
compare_gallery_examples:
  - title: Real - Broccoli
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/broccoli_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Real broccoli scene."
    divider_position: 50
  - title: Real - Chicken
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/chicken_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Real chicken scene."
    divider_position: 50
  - title: Real - Paprika
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/paprika_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Real paprika scene."
    divider_position: 50
  - title: Real - Walnut
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/walnut_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Real walnut scene."
    divider_position: 50
  - title: Synthetic - LIDC
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/lidc_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Synthetic chest scene."
    divider_position: 50
  - title: Synthetic - Teeth
    left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/teeth_fdk.png"
    right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
    left_label: FDK
    right_label: Ours
    caption: "Synthetic teeth scene."
    divider_position: 50
abstract: >
  Cone-beam computed tomography (CBCT) enables volumetric reconstruction from X-ray projections, but suffers from severe artifacts--especially beam hardening--when imaging materials with high attenuation such as metals. These artifacts arise from the polychromatic nature of X-rays and are not properly addressed by conventional monochromatic reconstruction algorithms. While recent neural representation-based methods offer improved reconstruction quality, they are computationally expensive and often impractical for deployment. We propose a novel physics-inspired, self-calibrating metal artifact reduction method that efficiently reconstructs 3D CBCT volumes while correcting beam hardening artifacts. Our method integrates a polychromatic X-ray projection model, material-dependent attenuation profiles, and system response modeling into a Gaussian Splatting framework. Unlike prior work, we eliminate the need for manual metal masks or strong prior assumptions, and we optimize both reconstruction parameters and X-ray spectral characteristics jointly during training. We further introduce a high-fidelity synthetic CBCT dataset generation pipeline validated on Monte-Carlo x-ray simulation toolbox and release new datasets with severe metal-induced artifacts to support the community. This is the first splat-based method for reducing beam hardening in CBCT. Extensive experiments on both synthetic and real-world datasets demonstrate that our method outperforms state-of-the-art approaches in artifact suppression and reconstruction accuracy.
# highlights:
#   - "Frontmatter fields map correctly to hero and metadata blocks."
#   - "Teaser media and action links render with the scoped stylesheet."
#   - "Markdown content and BibTeX display work without touching existing layouts."
citation: |
  @Article{Choi:EG:2026,
    author  = {Kiseok Choi and Inchul Kim and Jaemin Cho and Hyeongjun Cho and Min H. Kim},
    title   = {Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling},
    journal = {Computer Graphics Forum (Proc. EUROGRAPHICS 2026)},
    year    = {2026},
    volume  = {45},
    number  = {2},
    pages   = {}
  }
related_publications: false
giscus_comments: false
---

<!-- ## Method

This is a dry-run page to make future project page imports fast.  
You can replace this section with adapted HTML blocks from the reference template. -->

## Results

{% comment %}
The teaser section above should autoplay muted, and this image should load from local assets:

{% include figure.liquid loading="eager" path="assets/publication/[CVPR2023]dual_pixel/dual_pixel_sensor.png" title="Test figure" class="img-fluid rounded z-depth-1" %}
{% endcomment %}

We show four real (broccoli, chicken, paprika, and walnut) and two synthetic metal-artifact reduction results.
<!-- Thumbnail-based multi-example slider: -->

{% include project_compare_gallery.liquid
  id="test-gallery"
  examples=page.compare_gallery_examples
  thumb_label="Test comparisons"
  max_width="700px"
  max_height="700px"
%}


<!-- ## Notes

When you share the exact repository/page you want to import, we can map each source section to:

1. Frontmatter field (title, links, authors, venue, teaser).
2. Markdown section (abstract/method/results).
3. Optional raw HTML block (custom sliders/videos/interactives). -->
