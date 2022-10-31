const TRANSITION_DURATION = { duration: 0.5 };
const TRANSITION_DELAY = { delay: 0.5 };

const viewport = { once: true };
const whileInView = { opacity: 1, y: 0, x: 0 };

export const sectionTitleAnims = {
  initial: { opacity: 0, y: "-15%" },
  whileInView,
  transition: {
    ...TRANSITION_DELAY,
    ...TRANSITION_DURATION,
  },
  viewport,
};

export const paragraphAnims = {
  initial: { opacity: 0, y: "-75%" },
  whileInView,
  transition: { delay: 0.8, ...TRANSITION_DURATION },
  viewport,
};

export const containerAnims = {
  initial: { width: "50%" },
  viewport,
  whileInView: { width: "100%" },
  transition: TRANSITION_DURATION,
};

export const carsAnims = {
  initial: { x: "-100%", opacity: 0 },
  whileInView,
  transition: { ...TRANSITION_DURATION, ...TRANSITION_DELAY },
  viewport,
};
