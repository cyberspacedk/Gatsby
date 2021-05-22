export const countPizzasInToppings = (pizzas) => {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      acc[topping.id] = acc[topping.id]
        ? {
            ...acc[topping.id],
            count: acc[topping.id].count + 1,
          }
        : { id: topping.id, name: topping.name, count: 1 };
      return acc;
    }, {});

  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings || [];
};
