import React from "react";
import { createRoot } from "react-dom/client";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

type Scene = {
  leftSrc: string;
  rightSrc: string;
  leftAlt: string;
  rightAlt: string;
};

const roots = new WeakMap<HTMLElement, ReturnType<typeof createRoot>>();

function setFallbackVisibility(node: HTMLElement, visible: boolean) {
  const wrapper = node.closest(".astro-compare-slider");
  if (!(wrapper instanceof HTMLElement)) return;
  const fallback = wrapper.querySelector("[data-astro-compare-fallback]") as HTMLElement | null;
  if (!fallback) return;
  fallback.classList.toggle("is-hidden", !visible);
}

function sceneFromDataset(node: HTMLElement): Scene | null {
  const leftSrc = node.dataset.leftSrc;
  const rightSrc = node.dataset.rightSrc;
  const leftAlt = node.dataset.leftAlt || "Left image";
  const rightAlt = node.dataset.rightAlt || "Right image";
  if (!leftSrc || !rightSrc) return null;
  return { leftSrc, rightSrc, leftAlt, rightAlt };
}

function renderScene(node: HTMLElement, scene: Scene) {
  let root = roots.get(node);
  if (!root) {
    root = createRoot(node);
    roots.set(node, root);
  }

  root.render(
    <ReactCompareSlider
      className="astro-compare-slider__root"
      itemOne={<ReactCompareSliderImage src={scene.leftSrc} alt={scene.leftAlt} />}
      itemTwo={<ReactCompareSliderImage src={scene.rightSrc} alt={scene.rightAlt} />}
    />
  );
}

function mountAstroCompareSlider(node: Element) {
  if (!(node instanceof HTMLElement)) return;
  const scene = sceneFromDataset(node);
  if (!scene) {
    setFallbackVisibility(node, true);
    return;
  }
  try {
    renderScene(node, scene);
    node.dataset.astroCompareMounted = "true";
    setFallbackVisibility(node, false);
  } catch {
    setFallbackVisibility(node, true);
  }
}

function updateGalleryMeta(gallery: HTMLElement, thumb: HTMLElement) {
  const leftLabel = gallery.querySelector("[data-astro-compare-left-label]");
  const rightLabel = gallery.querySelector("[data-astro-compare-right-label]");
  const caption = gallery.querySelector("[data-astro-compare-caption]");
  const leftText = thumb.dataset.leftLabel;
  const rightText = thumb.dataset.rightLabel;
  const captionText = thumb.dataset.caption;

  if (leftLabel && leftText) leftLabel.textContent = leftText;
  if (rightLabel && rightText) rightLabel.textContent = rightText;
  if (caption && captionText !== undefined) caption.textContent = captionText;
}

function setActiveThumb(gallery: HTMLElement, activeThumb: HTMLElement) {
  gallery.querySelectorAll("[data-astro-compare-thumb]").forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    const isActive = node === activeThumb;
    node.classList.toggle("is-active", isActive);
    node.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyThumbScene(gallery: HTMLElement, thumb: HTMLElement) {
  const mount = gallery.querySelector("[data-astro-compare]");
  if (!(mount instanceof HTMLElement)) return;

  const leftSrc = thumb.dataset.leftSrc;
  const rightSrc = thumb.dataset.rightSrc;
  if (!leftSrc || !rightSrc) return;

  mount.dataset.leftSrc = leftSrc;
  mount.dataset.rightSrc = rightSrc;
  mount.dataset.leftAlt = thumb.dataset.leftAlt || thumb.dataset.leftLabel || "Left image";
  mount.dataset.rightAlt = thumb.dataset.rightAlt || thumb.dataset.rightLabel || "Right image";

  mountAstroCompareSlider(mount);
  updateGalleryMeta(gallery, thumb);
  setActiveThumb(gallery, thumb);
}

function initAstroCompareGalleries() {
  document.querySelectorAll("[data-astro-compare-gallery]").forEach((galleryNode) => {
    if (!(galleryNode instanceof HTMLElement)) return;

    const thumbs = galleryNode.querySelectorAll("[data-astro-compare-thumb]");
    if (thumbs.length === 0) return;

    thumbs.forEach((thumbNode) => {
      if (!(thumbNode instanceof HTMLElement)) return;
      thumbNode.addEventListener("click", () => applyThumbScene(galleryNode, thumbNode));
    });

    const initiallyActive = (galleryNode.querySelector("[data-astro-compare-thumb].is-active") as HTMLElement | null) || (thumbs[0] as HTMLElement);
    if (initiallyActive) {
      applyThumbScene(galleryNode, initiallyActive);
    }
  });
}

function initAstroCompareSliders() {
  document.querySelectorAll("[data-astro-compare]").forEach((node) => {
    mountAstroCompareSlider(node);
  });
  initAstroCompareGalleries();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAstroCompareSliders);
} else {
  initAstroCompareSliders();
}
