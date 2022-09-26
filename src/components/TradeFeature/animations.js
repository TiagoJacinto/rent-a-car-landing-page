const DEFAULT_TRANSITION_DURATION = { duration: 0.5 };
const DEFAULT_TRANSITION_DELAY = { delay: 0.5 };

const viewport = { once: true };
const whileInView = { opacity: 1, y: 0, x: 0 };

export const DemoAnim = {
  initial: { y: '-30%', opacity: 0 },
  whileInView,
  viewport,
  transition: { ...DEFAULT_TRANSITION_DURATION, ...DEFAULT_TRANSITION_DELAY },
};
