const DEFAULT_TRANSITION_DURATION = { duration: 1 };
const DEFAULT_TRANSITION_DELAY = { delay: 1 };

const viewport = { once: true };
const whileInView = { opacity: 1, y: 0, x: 0 };

export const MapAnims = {
  initial: { width: '30%' },
  whileInView: { width: '100%' },
  viewport,
  transition: DEFAULT_TRANSITION_DURATION,
};

export const CarAnims = {
  initial: { x: '-30%', opacity: 0 },
  viewport,
  whileInView,
  transition: { ...DEFAULT_TRANSITION_DELAY, ...DEFAULT_TRANSITION_DURATION },
};

export const DemoAnims = {
  initial: { y: '-20%', opacity: 0 },
  viewport,
  whileInView,
  transition: { delay: 1.5, ...DEFAULT_TRANSITION_DURATION },
};

export const sectionTitleAnims = {
  initial: { opacity: 0, y: '-55%' },
  whileInView,
  transition: {
    duration: 0.5,
  },
  viewport,
};

export const paragraphAnims = {
  initial: { opacity: 0, y: '-75%' },
  whileInView,
  transition: { ...DEFAULT_TRANSITION_DELAY, duration: 0.5 },
  viewport,
};
