(function () {
  function escapeAttributeValue(value) {
    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
      return CSS.escape(value);
    }

    return String(value).replace(/["\\]/g, "\\$&");
  }

  function setThumbState(container, activeThumb) {
    const thumbs = container ? container.querySelectorAll("[data-compare-thumb]") : [];
    thumbs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });

    if (activeThumb) {
      activeThumb.classList.add("is-active");
      activeThumb.setAttribute("aria-pressed", "true");
    }
  }

  function setActiveThumb(gallery, thumb, thumbContainer) {
    const slider = gallery.querySelector(".nerfies-compare__slider");
    const firstImage = slider ? slider.querySelector('[slot="first"]') : null;
    const secondImage = slider ? slider.querySelector('[slot="second"]') : null;
    const leftLabel = gallery.querySelector("[data-compare-left-label]");
    const rightLabel = gallery.querySelector("[data-compare-right-label]");
    const caption = gallery.querySelector("[data-compare-caption]");

    if (!slider || !firstImage || !secondImage || !thumb) {
      return;
    }

    const leftImage = thumb.getAttribute("data-left-image");
    const rightImage = thumb.getAttribute("data-right-image");
    const leftAlt = thumb.getAttribute("data-left-alt");
    const rightAlt = thumb.getAttribute("data-right-alt");
    const leftText = thumb.getAttribute("data-left-label");
    const rightText = thumb.getAttribute("data-right-label");
    const captionText = thumb.getAttribute("data-caption");
    const dividerPosition = thumb.getAttribute("data-divider-position") ?? thumb.getAttribute("data-value");

    if (leftImage) firstImage.setAttribute("src", leftImage);
    if (rightImage) secondImage.setAttribute("src", rightImage);
    if (leftAlt) firstImage.setAttribute("alt", leftAlt);
    if (rightAlt) secondImage.setAttribute("alt", rightAlt);
    if (leftLabel && leftText !== null) leftLabel.textContent = leftText;
    if (rightLabel && rightText !== null) rightLabel.textContent = rightText;
    if (caption && captionText !== null) caption.textContent = captionText;
    if (dividerPosition) slider.setAttribute("value", dividerPosition);

    setThumbState(thumbContainer ?? gallery, thumb);
  }

  function initCompareGallery(gallery) {
    const slider = gallery.querySelector(".nerfies-compare__slider");
    const firstImage = slider ? slider.querySelector('[slot="first"]') : null;
    const secondImage = slider ? slider.querySelector('[slot="second"]') : null;
    const thumbs = gallery.querySelectorAll("[data-compare-thumb]");

    if (!slider || !firstImage || !secondImage || thumbs.length === 0) {
      return;
    }

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => setActiveThumb(gallery, thumb, gallery));
    });
  }

  function initCompareTabGallery(gallery) {
    const slider = gallery.querySelector(".nerfies-compare__slider");
    const firstImage = slider ? slider.querySelector('[slot="first"]') : null;
    const secondImage = slider ? slider.querySelector('[slot="second"]') : null;
    const tabs = Array.from(gallery.querySelectorAll("[data-compare-tab]"));
    const panels = Array.from(gallery.querySelectorAll("[data-compare-panel]"));
    let activeSceneKey = null;

    if (!slider || !firstImage || !secondImage || tabs.length === 0 || panels.length === 0) {
      return;
    }

    const setActivePanel = (index, focusButton) => {
      tabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
        if (isActive && focusButton) {
          tab.focus();
        }
      });

      panels.forEach((panel, panelIndex) => {
        const isActive = panelIndex === index;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });

      const activePanel = panels[index];
      const matchedThumb =
        activePanel && activeSceneKey && activePanel.querySelector(`[data-compare-thumb][data-scene-key="${escapeAttributeValue(activeSceneKey)}"]`);
      const activeThumb =
        matchedThumb ||
        (activePanel && (activePanel.querySelector("[data-compare-thumb].is-active") || activePanel.querySelector("[data-compare-thumb]")));
      if (activePanel && activeThumb) {
        setActiveThumb(gallery, activeThumb, activePanel);
        activeSceneKey = activeThumb.getAttribute("data-scene-key") || activeSceneKey;
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => setActivePanel(index, false));
      tab.addEventListener("keydown", (event) => {
        const lastIndex = tabs.length - 1;
        let nextIndex = index;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = index === lastIndex ? 0 : index + 1;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = index === 0 ? lastIndex : index - 1;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = lastIndex;
        } else {
          return;
        }

        event.preventDefault();
        setActivePanel(nextIndex, true);
      });
    });

    panels.forEach((panel) => {
      const thumbs = panel.querySelectorAll("[data-compare-thumb]");
      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          activeSceneKey = thumb.getAttribute("data-scene-key") || activeSceneKey;
          setActiveThumb(gallery, thumb, panel);
        });
      });
    });

    const initialThumb =
      gallery.querySelector("[data-compare-panel].is-active [data-compare-thumb].is-active") ||
      gallery.querySelector("[data-compare-panel].is-active [data-compare-thumb]");
    if (initialThumb) {
      activeSceneKey = initialThumb.getAttribute("data-scene-key");
    }
    setActivePanel(0, false);
  }

  function initAllCompareGalleries() {
    const galleries = document.querySelectorAll("[data-compare-gallery]");
    galleries.forEach((gallery) => initCompareGallery(gallery));
    document.querySelectorAll("[data-compare-tab-gallery]").forEach((gallery) => initCompareTabGallery(gallery));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllCompareGalleries);
  } else {
    initAllCompareGalleries();
  }
})();
