const TRANSITION_DURATION = { duration: 0.5 };

const initial = { y: "-30%", opacity: 0 };
const viewport = { once: true };
const whileInView = { y: 0, opacity: 1 };

export const monthlyPriceAnims = {
  initial,
  viewport,
  whileInView,
  transition: TRANSITION_DURATION,
};

export const insuranceAnims = {
  initial,
  viewport,
  whileInView,
  transition: { ...TRANSITION_DURATION, delay: 0.5 },
};

export const maintenanceAnims = {
  initial,
  viewport,
  whileInView,
  transition: { ...TRANSITION_DURATION, delay: 1 },
};
