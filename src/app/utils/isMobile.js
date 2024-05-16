export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
};
export const isTablet = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 1024;
  }
};
