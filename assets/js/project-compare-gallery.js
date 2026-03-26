(function () {
  function initCompareGallery(gallery) {
    const slider = gallery.querySelector(".nerfies-compare__slider");
    const firstImage = slider ? slider.querySelector('[slot="first"]') : null;
    const secondImage = slider ? slider.querySelector('[slot="second"]') : null;
    const leftLabel = gallery.querySelector("[data-compare-left-label]");
    const rightLabel = gallery.querySelector("[data-compare-right-label]");
    const caption = gallery.querySelector("[data-compare-caption]");
    const thumbs = gallery.querySelectorAll("[data-compare-thumb]");

    if (!slider || !firstImage || !secondImage || thumbs.length === 0) {
      return;
    }

    const setActive = (thumb) => {
      const leftImage = thumb.getAttribute("data-left-image");
      const rightImage = thumb.getAttribute("data-right-image");
      const leftAlt = thumb.getAttribute("data-left-alt");
      const rightAlt = thumb.getAttribute("data-right-alt");
      const leftText = thumb.getAttribute("data-left-label");
      const rightText = thumb.getAttribute("data-right-label");
      const captionText = thumb.getAttribute("data-caption");
      const dividerPosition =
        thumb.getAttribute("data-divider-position") ??
        thumb.getAttribute("data-value");

      if (leftImage) firstImage.setAttribute("src", leftImage);
      if (rightImage) secondImage.setAttribute("src", rightImage);
      if (leftAlt) firstImage.setAttribute("alt", leftAlt);
      if (rightAlt) secondImage.setAttribute("alt", rightAlt);
      if (leftLabel && leftText) leftLabel.textContent = leftText;
      if (rightLabel && rightText) rightLabel.textContent = rightText;
      if (caption && captionText !== null) caption.textContent = captionText;
      if (dividerPosition) slider.setAttribute("value", dividerPosition);

      thumbs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      thumb.classList.add("is-active");
      thumb.setAttribute("aria-pressed", "true");
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => setActive(thumb));
    });
  }

  function initAllCompareGalleries() {
    const galleries = document.querySelectorAll("[data-compare-gallery]");
    galleries.forEach((gallery) => initCompareGallery(gallery));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllCompareGalleries);
  } else {
    initAllCompareGalleries();
  }
})();
