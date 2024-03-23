function isElementInViewport(el: HTMLElement | null) {
  if (el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  return false;
}

export { isElementInViewport };
