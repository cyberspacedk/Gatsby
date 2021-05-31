import { useState, useContext } from 'react';

import OrderContext from '../components/OrderCtx';

export const usePizza = ({ pizzas, inputs }) => {
  // 1. Create some state to hold our order

  const { order, setOrder } = useContext(OrderContext);

  // 2. Make a function add things to order
  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza]);
  };

  // 3. Make a function remove things from order
  const removeFromOrder = (idx) => {
    setOrder([...order.slice(0, idx), ...order.slice(idx + 1)]);
  };
  // 4. Send data the a serverless function when they checkout

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
};
