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

export const carAnims = {
  initial: { width: "50%" },
  viewport,
  whileInView: { width: "100%" },
  transition: TRANSITION_DURATION,
};

export const arrowsAnims = {
  initial: { opacity: 0 },
  whileInView,
  transition: {
    ...TRANSITION_DELAY,
    ...TRANSITION_DURATION,
  },
  viewport,
};

export const carSpecsAnims = {
  initial: { opacity: 0, y: "30%" },
  whileInView,
  transition: TRANSITION_DURATION,
  viewport,
  exit: { opacity: 0, y: "-30%" },
};

export const carImageAnims = {
  initial: { opacity: 0, x: "100%" },
  whileInView,
  transition: TRANSITION_DURATION,
  viewport,
  exit: { opacity: 0, x: "-100%", position: "relative" },
};
