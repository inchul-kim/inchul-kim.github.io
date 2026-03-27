// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "Bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-dual-pixel-paper-has-been-accepted-to-cvpr-2023-click",
          title: 'Our dual-pixel paper has been accepted to CVPR 2023. [Click]',
          description: "",
          section: "News",},{id: "news-our-nlos-paper-has-been-accepted-to-siggraph-asia-2023-click",
          title: 'Our NLOS paper has been accepted to SIGGRAPH Asia 2023. [Click]',
          description: "",
          section: "News",},{id: "news-our-cbct-metal-artifact-reduction-paper-has-been-accepted-to-eurographics-2026-click",
          title: 'Our CBCT metal artifact reduction paper has been accepted to Eurographics 2026. [Click]...',
          description: "",
          section: "News",},{id: "news-our-cbct-pose-calibration-paper-has-been-accepted-to-cvpr-2026-click",
          title: 'Our CBCT pose calibration paper has been accepted to CVPR 2026. [Click]',
          description: "",
          section: "News",},{id: "news-our-cbct-paper-on-compact-attenuation-modelling-has-been-accepted-to-cvpr-2026-click",
          title: 'Our CBCT paper on compact attenuation modelling has been accepted to CVPR 2026....',
          description: "",
          section: "News",},{id: "projects-splat-based-metal-artifact-reduction-in-cone-beam-ct-via-polychromatic-modeling",
          title: 'Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling',
          description: "Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eg2026_cbct_mar/";
            },},{id: "projects-splat-based-metal-artifact-reduction-in-cone-beam-ct-via-polychromatic-modeling-astro-style-example",
          title: 'Splat-based Metal Artifact Reduction in Cone-Beam CT via Polychromatic Modeling (Astro-style Example)',
          description: "Example page using Astro-style features ported into the Jekyll project_nerfies layout.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eg2026_cbct_mar_astro_example/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
