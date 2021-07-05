import { useState, useContext } from 'react';

import OrderContext from '../components/OrderCtx';
import { calculateOrderTotal } from './calculateOrderTotal';
import { attachOrderData } from './attachOrderData';

export const usePizza = ({ pizzas, values }) => {
  // 1 get and set order data to Context
  const { order, setOrder } = useContext(OrderContext);

  // 1.1 Handle state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 2. Make a function add things to order
  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza]);
  };

  // 3. Make a function remove things from order
  const removeFromOrder = (idx) => {
    setOrder([...order.slice(0, idx), ...order.slice(idx + 1)]);
  };

  // 4. Send data the a serverless function when they checkout
  const submitOrder = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setMessage('');

    try {
      const body = {
        order: attachOrderData(order, pizzas),
        total: calculateOrderTotal(order, pizzas),
        name: values.name,
        email: values.email,
        emailX: values.emailX,
      };

      // Serverless function uri
      const uri = `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`;

      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const responseText = JSON.parse(await response.text());

      if (response.status >= 400 && response.status < 600) {
        setLoading(false);
        setError(responseText.message);
      } else {
        setLoading(false);
        setMessage('Success! Come on down for your pizza!');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
};
