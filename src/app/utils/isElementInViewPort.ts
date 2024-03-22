function isElementInViewport(el: HTMLElement) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export default isElementInViewport;
