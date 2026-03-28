---
layout: project_nerfies
title: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling (Astro-style Example)"
description: "Example page using Astro-style features ported into the Jekyll project_nerfies layout."
importance: 100
category: work
published: false
permalink: /projects/eg2026_cbct_mar_astro_example/
# img: "assets/publication/[CVPR2023]dual_pixel/dual_pixel.png"
project_kicker: "Computer Graphics Forum (EG 2026) - Astro-style Feature Showcase"
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
author_notes:
  - symbol: "*"
    text: Demonstration page using Astro-style project components ported to Jekyll.
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
    # url: /tba
    icon: fa-brands fa-github
  - label: Data
    # url: https://your-dataset-link
    icon: fa-solid fa-database
  # - label: arXiv
  #   # url: https://arxiv.org/abs/xxxx.xxxxx
  #   icon: ai ai-arxiv
  - label: DOI
    # url: https://doi.org/xx.xxxx/xxxxx
    icon: ai ai-doi
  # - label: Demo Video
  #   url: /assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4
  #   icon: fa-solid fa-film
# teaser_video: "/assets/publication/[CVPR2026]cbct_pose/ours_broccoli.mp4"
# teaser_video_type: video/mp4
# teaser_caption: "Local MP4 teaser from existing assets."
teaser_image: "/assets/publication/[EG2026]cbct_mar/project/teaser.svg"
teaser_image_dark: "/assets/publication/[EG2026]cbct_mar/project/teaser_dark.svg"
teaser_image_mobile: "/assets/publication/[EG2026]cbct_mar/project/teaser_mobile.png"
teaser_image_dark_mobile: "/assets/publication/[EG2026]cbct_mar/project/teaser_dark_mobile.png"
# teaser_pdf: "/assets/publication/[EG2026]cbct_mar/project/teaser.pdf"
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
compare_tabs_groups:
  - label: FDK (Real)
    left_label: FDK
    right_label: Ours
    caption: "Real-scene comparison against ours."
    examples:
      - title: Broccoli
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/broccoli_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
        caption: "Real broccoli scene."
      - title: Chicken
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/chicken_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
        caption: "Real chicken scene."
      - title: Paprika
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/paprika_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
        caption: "Real paprika scene."
      - title: Walnut
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/walnut_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
        caption: "Real walnut scene."
  - label: FDK (Synthetic)
    left_label: FDK
    right_label: Ours
    caption: "Synthetic-scene comparison against ours."
    examples:
      - title: LIDC
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/lidc_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
        caption: "Synthetic chest scene."
      - title: Teeth
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/teeth_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
        caption: "Synthetic teeth scene."
  - label: Mixed Demo
    left_label: FDK
    right_label: Ours
    caption: "A mixed set to demonstrate method tabs plus scene thumbnails."
    examples:
      - title: Broccoli
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/broccoli_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/broccoli_fdk.png"
        caption: "Real broccoli scene."
      - title: LIDC
        left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/lidc_fdk.png"
        right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
        thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/fdk/lidc_fdk.png"
        caption: "Synthetic chest scene."
abstract: >
  Cone-beam computed tomography (CBCT) enables volumetric reconstruction from X-ray projections, but suffers from severe artifacts--especially beam hardening--when imaging materials with high attenuation such as metals. These artifacts arise from the polychromatic nature of X-rays and are not properly addressed by conventional monochromatic reconstruction algorithms. While recent neural representation-based methods offer improved reconstruction quality, they are computationally expensive and often impractical for deployment. We propose a novel physics-inspired, self-calibrating metal artifact reduction method that efficiently reconstructs 3D CBCT volumes while correcting beam hardening artifacts. Our method integrates a polychromatic X-ray projection model, material-dependent attenuation profiles, and system response modeling into a Gaussian Splatting framework. Unlike prior work, we eliminate the need for manual metal masks or strong prior assumptions, and we optimize both reconstruction parameters and X-ray spectral characteristics jointly during training. We further introduce a high-fidelity synthetic CBCT dataset generation pipeline validated on Monte-Carlo x-ray simulation toolbox and release new datasets with severe metal-induced artifacts to support the community. This is the first splat-based method for reducing beam hardening in CBCT. Extensive experiments on both synthetic and real-world datasets demonstrate that our method outperforms state-of-the-art approaches in artifact suppression and reconstruction accuracy.
highlight_section:
  title: "Core Idea"
  content: >
    We reconstruct CBCT with a **physics-inspired Gaussian Splatting** formulation that jointly optimizes (1) per-Gaussian material behavior and (2) global X-ray spectral response. This directly addresses beam hardening from metals, avoids manual metal masks, and remains computationally practical for high-quality volumetric reconstruction.
feature_section:
  type: overview
  description: >
    Our method jointly models projection and reconstruction by optimizing per-Gaussian material parameters together with the global X-ray response. A physics-based attenuation model decomposes material behavior into Compton and photoelectric components, enabling accurate polychromatic forward projection and effective metal artifact reduction without metal masks.
  figures:
    - path: assets/publication/[EG2026]cbct_mar/project/pipeline.png
      title: Pipeline overview
      caption: CBCT reconstruction with differentiable Gaussian primitives and our polychromatic X-ray model.
      loading: eager
tabs_section:
  title: "Case Study Tabs"
  tabs:
    - label: "Real: Broccoli (FDK)"
      image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/broccoli_fdk.png
      caption: Baseline FDK shows severe metal-induced streak artifacts.
    - label: "Real: Broccoli (Ours)"
      image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png
      caption: Our method suppresses streaks while preserving structures.
    - label: "Synthetic: LIDC (Ours)"
      image: assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png
      caption: Strong performance transfers to synthetic chest data.
    - label: "Pipeline"
      image: assets/publication/[EG2026]cbct_mar/project/pipeline.png
      caption: End-to-end optimization pipeline used in this work.
carousel_section:
  title: "Ours Across Scenes"
  slides:
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png
      title: Broccoli
      caption: Real scene - broccoli.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png
      title: Chicken
      caption: Real scene - chicken.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png
      title: Paprika
      caption: Real scene - paprika.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png
      title: Walnut
      caption: Real scene - walnut.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png
      title: LIDC
      caption: Synthetic scene - LIDC.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png
      title: Teeth
      caption: Synthetic scene - teeth.
bootstrap_carousel_section:
  title: "Academic Template-style Carousel"
  swipe_threshold: 56
  swipe_vertical_ratio: 1.2
  items:
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png
      caption: First image description.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png
      caption: Second image description.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png
      caption: Third image description.
    - image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png
      caption: Fourth image description.
two_columns_section:
  title: "Representative FDK vs Ours"
  left:
    image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/walnut_fdk.png
    title: FDK
    caption: Baseline FDK reconstruction with noticeable streak artifacts.
  right:
    image: assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png
    title: Ours
    caption: Artifact-reduced reconstruction from our polychromatic model.
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
Compared with the results from FDK, our method reduces metal-induced streaky artifacts consistently across scenes.

## Astro ReactCompareSlider Example

{% include project_compare_slider_astro.liquid
  left_image="assets/publication/[EG2026]cbct_mar/project/comparisons/real/fdk/chicken_fdk.png"
  right_image="assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
  left_label="FDK"
  right_label="Ours"
  caption="Astro-style slider powered by ReactCompareSlider."
  max_width="700px"
%}

## Wide Pipeline View

{% include project_wide_figure.liquid
  path="assets/publication/[EG2026]cbct_mar/project/pipeline.png"
  title="Pipeline overview (wide)"
  caption="A wide presentation of the full optimization pipeline."
  loading="eager"
%}

## Academic Project Template-style Carousel

{% include project_bootstrap_carousel.liquid
  id="eg2026-template-carousel"
  title="CBCT Result Carousel"
  items=page.bootstrap_carousel_section.items
%}

## Astro Slider + Thumbnails (Scene Switch)

{% include project_compare_gallery_astro.liquid
  id="eg2026-astro-thumb-gallery"
  examples=page.compare_gallery_examples
  thumb_label="Switch scenes"
  max_width="700px"
%}

## Astro Slider + Method Tabs + Scene Thumbnails

{% include project_compare_tabs_astro.liquid
  id="eg2026-astro-tab-gallery"
  groups=page.compare_tabs_groups
  tab_label="Comparison methods"
  thumb_label="Scenes"
  max_width="700px"
%}

<!-- Thumbnail-based multi-example slider: -->

{% include project_compare_gallery.liquid
  id="test-gallery"
  examples=page.compare_gallery_examples
  thumb_label="Test comparisons"
  max_width="700px"
%}

## Additional Two-Column Example (Include-Based)

{% include project_two_columns.liquid
  title="Walnut: Direct Side-by-Side"
  left=page.two_columns_section.left
  right=page.two_columns_section.right
%}

<!-- ## Notes

When you share the exact repository/page you want to import, we can map each source section to:

1. Frontmatter field (title, links, authors, venue, teaser).
2. Markdown section (abstract/method/results).
3. Optional raw HTML block (custom sliders/videos/interactives). -->
