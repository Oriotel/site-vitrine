// Sandbox calculation for scroll progress
const trackScroll = () => {
  const rect = containerRef.current.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  // rect.top goes from windowHeight (bottom of screen) to -rect.height (top of screen)
  // We want to track from when the top of the container hits the top of the viewport (rect.top <= 0)
  // to when the bottom of the container hits the bottom of the viewport
};
