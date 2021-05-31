import React from 'react';
import Img from 'gatsby-image';

import { MenuItemStyles } from '../../styles/MenuItemStyles';

import { calculatePizzaPrice } from '../../utils/calculatePizzaPrice';
import { formatMoney } from '../../utils/formatMoney';

const PizzaOrder = ({ pizzas, addToOrder }) => (
  <>
    {pizzas.map((pizza) => (
      <MenuItemStyles key={pizza.id}>
        <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
        <div>
          <h2>{pizza.name}</h2>
        </div>
        <div>
          {['S', 'M', 'L'].map((size) => (
            <button
              type="button"
              key={size}
              onClick={() =>
                addToOrder({
                  id: pizza.id,
                  size,
                })
              }
            >
              {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
            </button>
          ))}
        </div>
      </MenuItemStyles>
    ))}
  </>
);

export default PizzaOrder;
