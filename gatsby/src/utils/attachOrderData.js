import { calculatePizzaPrice } from './calculatePizzaPrice';
import { formatMoney } from './formatMoney';

export const attachOrderData = (order, pizzas) =>
  order.map((item) => {
    const currentPizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: currentPizza.name,
      thumbnail: currentPizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(currentPizza.price, item.size)),
    };
  });
