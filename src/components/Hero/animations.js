const DEFAULT_TRANSITION_DURATION = { duration: 0.5 };
const DEFAULT_TRANSITION_DELAY = { delay: 0.5 };

const viewport = { once: true };
const animate = { x: 0, y: 0 };

export const containerAnims = {
  initial: { width: '90%' },
  animate: { width: '100%' },
  transition: DEFAULT_TRANSITION_DURATION,
  viewport,
};

export const textAnims = {
  initial: { y: '-300%' },
  animate,
  transition: { ...DEFAULT_TRANSITION_DURATION, ...DEFAULT_TRANSITION_DELAY },
  viewport,
};

export const carsAnims = {
  initial: { x: '-200%' },
  animate,
  transition: DEFAULT_TRANSITION_DURATION,
  viewport,
};

export const appDemoAnims = {
  initial: { x: '300%' },
  animate,
  transition: { ...DEFAULT_TRANSITION_DURATION, ...DEFAULT_TRANSITION_DELAY },
  viewport,
};
