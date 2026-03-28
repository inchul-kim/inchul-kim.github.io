(function () {
  function initProjectTabs(root) {
    const buttons = Array.from(root.querySelectorAll("[data-project-tab-button]"));
    const panels = Array.from(root.querySelectorAll("[data-project-tab-panel]"));
    if (buttons.length === 0 || panels.length === 0) return;

    const setActive = (index, focusButton) => {
      buttons.forEach((button, idx) => {
        const isActive = idx === index;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
        button.setAttribute("tabindex", isActive ? "0" : "-1");
        if (isActive && focusButton) button.focus();
      });

      panels.forEach((panel, idx) => {
        const isActive = idx === index;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    buttons.forEach((button, idx) => {
      button.addEventListener("click", () => setActive(idx, false));
      button.addEventListener("keydown", (event) => {
        const lastIndex = buttons.length - 1;
        let nextIndex = idx;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = idx === lastIndex ? 0 : idx + 1;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = idx === 0 ? lastIndex : idx - 1;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = lastIndex;
        } else {
          return;
        }
        event.preventDefault();
        setActive(nextIndex, true);
      });
    });
  }

  function initProjectCarousel(root) {
    const viewport = root.querySelector("[data-project-carousel-viewport]");
    const slides = Array.from(root.querySelectorAll("[data-project-carousel-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-project-carousel-dot]"));
    const prevButton = root.querySelector("[data-project-carousel-prev]");
    const nextButton = root.querySelector("[data-project-carousel-next]");
    if (!viewport || slides.length === 0) return;

    let currentIndex = 0;

    const setControls = () => {
      if (prevButton) prevButton.disabled = currentIndex === 0;
      if (nextButton) nextButton.disabled = currentIndex === slides.length - 1;
      dots.forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    };

    const goTo = (index) => {
      if (index < 0 || index >= slides.length) return;
      currentIndex = index;
      slides[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setControls();
    };

    if (prevButton) prevButton.addEventListener("click", () => goTo(currentIndex - 1));
    if (nextButton) nextButton.addEventListener("click", () => goTo(currentIndex + 1));
    dots.forEach((dot, idx) => dot.addEventListener("click", () => goTo(idx)));

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length === 0) return;
          const best = visible.reduce((prev, current) => (current.intersectionRatio > prev.intersectionRatio ? current : prev));
          const nextIndex = Number(best.target.getAttribute("data-slide-index"));
          if (Number.isNaN(nextIndex)) return;
          currentIndex = nextIndex;
          setControls();
        },
        { root: viewport, threshold: 0.6 }
      );
      slides.forEach((slide) => observer.observe(slide));
    }

    setControls();
  }

  function initBootstrapCarouselSwipe(carousel) {
    if (!(carousel instanceof HTMLElement)) return;
    if (carousel.dataset.touchSwipeInit === "true") return;

    const parseNumber = (value, fallback) => {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    const parseBoolean = (value, fallback) => {
      if (typeof value !== "string" || value.length === 0) return fallback;
      const normalized = value.toLowerCase();
      if (normalized === "true") return true;
      if (normalized === "false") return false;
      return fallback;
    };

    const swipeThreshold = Math.max(8, parseNumber(carousel.dataset.swipeThreshold, 44));
    const swipeVerticalRatio = Math.max(0.2, parseNumber(carousel.dataset.swipeVerticalRatio, 1.0));
    const wrap = parseBoolean(carousel.dataset.wrap, true);

    const carouselRoot = carousel.closest(".nerfies-bcarousel");
    const slides = Array.from(carousel.querySelectorAll(".carousel-item"));
    const thumbs = carouselRoot ? Array.from(carouselRoot.querySelectorAll("[data-bcarousel-thumb]")) : [];
    const currentCountNode = carouselRoot ? carouselRoot.querySelector("[data-bcarousel-current]") : null;
    const totalCountNode = carouselRoot ? carouselRoot.querySelector("[data-bcarousel-total]") : null;
    if (slides.length === 0) return;

    const prevControl = carousel.querySelector(".carousel-control-prev");
    const nextControl = carousel.querySelector(".carousel-control-next");
    const touchSurface = carousel.querySelector(".carousel-inner") || carousel;
    touchSurface.style.touchAction = "pan-y";

    let currentIndex = Math.max(
      0,
      slides.findIndex((slide) => slide.classList.contains("active"))
    );

    if (totalCountNode) {
      totalCountNode.textContent = String(slides.length);
    }

    const updateThumbAndCounter = (index) => {
      if (currentCountNode) {
        currentCountNode.textContent = String(index + 1);
      }

      thumbs.forEach((thumb, thumbIndex) => {
        const isActive = thumbIndex === index;
        thumb.classList.toggle("is-active", isActive);
        thumb.setAttribute("aria-pressed", isActive ? "true" : "false");
        thumb.setAttribute("aria-current", isActive ? "true" : "false");
      });

      const activeThumb = thumbs[index];
      if (activeThumb instanceof HTMLElement) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    let startX = 0;
    let startY = 0;
    let tracking = false;
    let horizontalIntent = false;

    const bootstrapApi = (() => {
      if (!window.jQuery || typeof window.jQuery !== "function") return null;
      const jqCarousel = window.jQuery(carousel);
      if (!jqCarousel || typeof jqCarousel.carousel !== "function") return null;
      return jqCarousel;
    })();

    if (bootstrapApi) {
      bootstrapApi.carousel({
        interval: false,
        ride: false,
        pause: "hover",
        wrap,
        touch: false,
      });
      bootstrapApi.carousel("pause");
    }

    const activateIndex = (index) => {
      if (!Number.isFinite(index) || index < 0 || index >= slides.length) return;

      if (bootstrapApi) {
        bootstrapApi.carousel(index);
        bootstrapApi.carousel("pause");
      } else {
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("active", slideIndex === index);
        });
        currentIndex = index;
        updateThumbAndCounter(currentIndex);
      }
    };

    const triggerSlide = (direction) => {
      if (bootstrapApi) {
        bootstrapApi.carousel(direction);
        bootstrapApi.carousel("pause");
        return;
      }

      if (direction === "next") {
        const nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : wrap ? 0 : currentIndex;
        activateIndex(nextIndex);
      } else if (direction === "prev") {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : wrap ? slides.length - 1 : currentIndex;
        activateIndex(prevIndex);
      }
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const index = Number(thumb.dataset.slideIndex);
        activateIndex(index);
      });
    });

    if (!bootstrapApi) {
      if (nextControl instanceof HTMLElement) {
        nextControl.addEventListener("click", (event) => {
          event.preventDefault();
          triggerSlide("next");
        });
      }
      if (prevControl instanceof HTMLElement) {
        prevControl.addEventListener("click", (event) => {
          event.preventDefault();
          triggerSlide("prev");
        });
      }
    }

    const syncFromSlidEvent = (event) => {
      const relatedTarget = event && event.relatedTarget;
      const nextIndex = slides.findIndex((slide) => slide === relatedTarget);
      if (nextIndex >= 0) {
        currentIndex = nextIndex;
      } else {
        currentIndex = Math.max(
          0,
          slides.findIndex((slide) => slide.classList.contains("active"))
        );
      }
      updateThumbAndCounter(currentIndex);
      if (bootstrapApi) bootstrapApi.carousel("pause");
    };

    if (bootstrapApi && typeof bootstrapApi.on === "function") {
      bootstrapApi.on("slid.bs.carousel", syncFromSlidEvent);
    } else {
      carousel.addEventListener("slid.bs.carousel", syncFromSlidEvent);
    }

    touchSurface.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length !== 1) return;
        const touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        tracking = true;
        horizontalIntent = false;
      },
      { passive: true }
    );

    touchSurface.addEventListener(
      "touchmove",
      (event) => {
        if (!tracking || event.touches.length !== 1) return;

        const touch = event.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const horizontalDistance = Math.abs(deltaX);
        const verticalDistance = Math.abs(deltaY);

        horizontalIntent = horizontalDistance > 8 && horizontalDistance > verticalDistance * swipeVerticalRatio;
        if (horizontalIntent && event.cancelable) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    touchSurface.addEventListener(
      "touchend",
      (event) => {
        if (!tracking || event.changedTouches.length === 0) return;
        tracking = false;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const horizontalDistance = Math.abs(deltaX);
        const verticalDistance = Math.abs(deltaY);

        if (!horizontalIntent) return;
        if (horizontalDistance < swipeThreshold || horizontalDistance <= verticalDistance * swipeVerticalRatio) return;
        triggerSlide(deltaX < 0 ? "next" : "prev");
      },
      { passive: true }
    );

    updateThumbAndCounter(currentIndex);
    carousel.dataset.touchSwipeInit = "true";
  }

  function initAllProjectShowcaseFeatures() {
    document.querySelectorAll("[data-project-tabs]").forEach(initProjectTabs);
    document.querySelectorAll("[data-project-carousel]").forEach(initProjectCarousel);
    document.querySelectorAll(".nerfies-bcarousel .carousel").forEach(initBootstrapCarouselSwipe);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllProjectShowcaseFeatures);
  } else {
    initAllProjectShowcaseFeatures();
  }
})();
