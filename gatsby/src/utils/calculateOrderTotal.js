import { calculatePizzaPrice } from './calculatePizzaPrice';
import { formatMoney } from './formatMoney';

export const calculateOrderTotal = (order, pizzas) => {
  const total = order.reduce((acc, singleOrder) => {
    const currentPizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
    return acc + calculatePizzaPrice(currentPizza.price, singleOrder.size);
  }, 0);
  return formatMoney(total);
};
