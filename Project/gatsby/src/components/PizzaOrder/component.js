import React from 'react';
import Img from 'gatsby-image';

import { MenuItemStyles } from '../../styles/MenuItemStyles';

import { calculatePizzaPrice } from '../../utils/calculatePizzaPrice';
import { formatMoney } from '../../utils/formatMoney';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  console.log(order);
  return (
    <>
      <p>You have {order.length} item(s) in your order!</p>
      {order.map((singleOrder, idx) => {
        const currentPizza = pizzas.find(
          (pizza) => pizza.id === singleOrder.id
        );
        return (
          <MenuItemStyles key={singleOrder.id}>
            <Img fluid={currentPizza.image.asset.fluid} />
            <h2>{currentPizza.name}</h2>
            <p>
              Price:{' '}
              {formatMoney(
                calculatePizzaPrice(currentPizza.price, singleOrder.size)
              )}
            </p>
            <button
              type="button"
              className="remove"
              title="Remove pizza from order"
              onClick={() => removeFromOrder(idx)}
            >
              &times;
            </button>
          </MenuItemStyles>
        );
      })}
    </>
  );
};

export default PizzaOrder;
