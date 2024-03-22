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

function isElementAtTop(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top <= 0 && window.scrollY === 0;
}

export { isElementInViewport, isElementAtTop };
