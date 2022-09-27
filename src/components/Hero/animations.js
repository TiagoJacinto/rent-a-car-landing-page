const DEFAULT_TRANSITION_DURATION = { duration: 0.7 };
const DEFAULT_TRANSITION_DELAY = { delay: 0.7 };

const viewport = { once: true };
const animate = { x: 0, y: 0, opacity: 1 };

export const textAnims = {
  initial: { opacity: 0, y: '-400%' },
  animate,
  transition: {
    ...DEFAULT_TRANSITION_DURATION,
    ...DEFAULT_TRANSITION_DELAY,
    ease: 'easeOut',
  },
  viewport,
};

export const carsAnims = {
  initial: { opacity: 0, x: '-200%' },
  animate,
  transition: DEFAULT_TRANSITION_DURATION,
  viewport,
};

export const appDemoAnims = {
  initial: { opacity: 0, x: '400%' },
  animate,
  transition: {
    ...DEFAULT_TRANSITION_DURATION,
    ...DEFAULT_TRANSITION_DELAY,
    ease: 'easeOut',
  },
  viewport,
};
