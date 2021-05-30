const sizes = {
  S: 0.75,
  M: 1,
  L: 1.25,
};

export const calculatePizzaPrice = (cents, size) => cents * sizes[size];
