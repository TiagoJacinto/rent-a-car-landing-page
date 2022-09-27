const DEFAULT_TRANSITION_DURATION = { duration: 0.5 };
const DEFAULT_TRANSITION_DELAY = { delay: 0.5 };

const viewport = { once: true };
const whileInView = { opacity: 1, y: 0, x: 0 };

export const sectionTitleAnims = {
  initial: { opacity: 0, y: '-15%' },
  whileInView,
  transition: {
    ...DEFAULT_TRANSITION_DELAY,
    ...DEFAULT_TRANSITION_DURATION,
  },
  viewport,
};

export const paragraphAnims = {
  initial: { opacity: 0, y: '-75%' },
  whileInView,
  transition: { delay: 0.8, ...DEFAULT_TRANSITION_DURATION },
  viewport,
};

export const containerAnims = {
  initial: { width: '50%' },
  viewport,
  whileInView: { width: '100%' },
  transition: DEFAULT_TRANSITION_DURATION,
};

export const carsAnims = {
  initial: { x: '-100%', opacity: 0 },
  whileInView,
  transition: { ...DEFAULT_TRANSITION_DURATION, ...DEFAULT_TRANSITION_DELAY },
  viewport,
};
