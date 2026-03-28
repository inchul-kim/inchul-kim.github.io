---
layout: project_nerfies
title: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling"
description: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling"
importance: 100
category: work
published: true
permalink: /projects/eg2026_cbct_mar/
# img: "assets/publication/[CVPR2023]dual_pixel/dual_pixel.png"
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
    # url: /tba
    icon: fa-brands fa-github
  - label: Data
    # url: https://your-dataset-link
    icon: fa-solid fa-database
  # - label: arXiv
  #   # url: https://arxiv.org/abs/xxxx.xxxxx
  #   icon: ai ai-arxiv
  - label: DOI
    url: https://doi.org/10.1111/cgf.70339
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
comparison_section_gap: 2rem
comparison_title_gap: 1rem
comparison_sections:
  - title: Synthetic Scenes
    id: eg2026-synthetic-comparisons
    thumb_label: Synthetic scenes
    groups:
      - label: FDK
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
      - label: LIMAR
        left_label: LIMAR
        right_label: Ours
        caption: "Synthetic-scene comparison against ours."
        examples:
          - title: LIDC
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/limar/lidc_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            caption: "Synthetic chest scene."
          - title: Teeth
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/limar/teeth_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            caption: "Synthetic teeth scene."
      - label: Park et al.
        left_label: Park et al.
        right_label: Ours
        caption: "Synthetic-scene comparison against ours."
        examples:
          - title: LIDC
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/parketal/lidc_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            caption: "Synthetic chest scene."
          - title: Teeth
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/parketal/teeth_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            caption: "Synthetic teeth scene."
      - label: Polyner
        left_label: Polyner
        right_label: Ours
        caption: "Synthetic-scene comparison against ours."
        examples:
          - title: LIDC
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/polyner/lidc_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/lidc_ours.png"
            caption: "Synthetic chest scene."
          - title: Teeth
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/polyner/teeth_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/synthetic/ours/teeth_ours.png"
            caption: "Synthetic teeth scene."
  - title: Real Scenes
    id: eg2026-real-comparisons
    thumb_label: Real scenes
    groups:
      - label: FDK
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
      - label: LIMAR
        left_label: LIMAR
        right_label: Ours
        caption: "Real-scene comparison against ours."
        examples:
          - title: Broccoli
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/limar/broccoli_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            caption: "Real broccoli scene."
          - title: Chicken
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/limar/chicken_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            caption: "Real chicken scene."
          - title: Paprika
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/limar/paprika_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            caption: "Real paprika scene."
          - title: Walnut
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/limar/walnut_limar.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            caption: "Real walnut scene."
      - label: Park et al.
        left_label: Park et al.
        right_label: Ours
        caption: "Real-scene comparison against ours."
        examples:
          - title: Broccoli
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/parketal/broccoli_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            caption: "Real broccoli scene."
          - title: Chicken
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/parketal/chicken_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            caption: "Real chicken scene."
          - title: Paprika
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/parketal/paprika_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            caption: "Real paprika scene."
          - title: Walnut
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/parketal/walnut_parketal.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            caption: "Real walnut scene."
      - label: Polyner
        left_label: Polyner
        right_label: Ours
        caption: "Real-scene comparison against ours."
        examples:
          - title: Broccoli
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/polyner/broccoli_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/broccoli_ours.png"
            caption: "Real broccoli scene."
          - title: Chicken
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/polyner/chicken_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/chicken_ours.png"
            caption: "Real chicken scene."
          - title: Paprika
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/polyner/paprika_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/paprika_ours.png"
            caption: "Real paprika scene."
          - title: Walnut
            left_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/polyner/walnut_polyner.png"
            right_image: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            thumb: "assets/publication/[EG2026]cbct_mar/project/comparisons/real/ours/walnut_ours.png"
            caption: "Real walnut scene."
abstract: >
  Cone-beam computed tomography (CBCT) enables volumetric reconstruction from X-ray projections, but suffers from severe artifacts--especially beam hardening--when imaging materials with high attenuation such as metals. These artifacts arise from the polychromatic nature of X-rays and are not properly addressed by conventional monochromatic reconstruction algorithms. While recent neural representation-based methods offer improved reconstruction quality, they are computationally expensive and often impractical for deployment. We propose a novel physics-inspired, self-calibrating metal artifact reduction method that efficiently reconstructs 3D CBCT volumes while correcting beam hardening artifacts. Our method integrates a polychromatic X-ray projection model, material-dependent attenuation profiles, and system response modeling into a Gaussian Splatting framework. Unlike prior work, we eliminate the need for manual metal masks or strong prior assumptions, and we optimize both reconstruction parameters and X-ray spectral characteristics jointly during training. We further introduce a high-fidelity synthetic CBCT dataset generation pipeline validated on Monte-Carlo x-ray simulation toolbox and release new datasets with severe metal-induced artifacts to support the community. This is the first splat-based method for reducing beam hardening in CBCT. Extensive experiments on both synthetic and real-world datasets demonstrate that our method outperforms state-of-the-art approaches in artifact suppression and reconstruction accuracy.
feature_section:
  type: overview
  description: >
    Our method jointly models projection and reconstruction by optimizing per-Gaussian material parameters together with the global X-ray response. A physics-based attenuation model decomposes material behavior into Compton and photoelectric components, enabling accurate polychromatic forward projection and effective metal artifact reduction without metal masks.
  figures:
    - path: assets/publication/[EG2026]cbct_mar/project/pipeline.png
      title: Pipeline overview
      caption: CBCT reconstruction with differentiable Gaussian primitives and our polychromatic X-ray model.
      loading: eager
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

We benchmark against baseline methods (FDK, LIMAR) and NeRF-based MAR approaches (Park et al., Polyner) across synthetic and real scenes.
Our method consistently achieves superior artifact reduction while preserving fine structural details.

<div class="project-compare-sections-grid">
{% for section in page.comparison_sections %}

  <section
    class="project-compare-section"
    style="--project-compare-section-gap: {{ page.comparison_section_gap | default: '2rem' }}; --project-compare-title-gap: {{ page.comparison_title_gap | default: '1rem' }};"
  >
    <h3 class="project-compare-section__title">{{ section.title }}</h3>

{% include project_compare_tab_gallery.liquid
    id=section.id
    groups=section.groups
    tab_label="Comparison methods"
    thumb_label=section.thumb_label
    max_width="min(100%, 1000px)"
  %}

  </section>

{% endfor %}

</div>

<!-- ## Notes

When you share the exact repository/page you want to import, we can map each source section to:

1. Frontmatter field (title, links, authors, venue, teaser).
2. Markdown section (abstract/method/results).
3. Optional raw HTML block (custom sliders/videos/interactives). -->
