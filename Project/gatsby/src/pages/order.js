/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/SEO';
import PizzaMenu from '../components/PizzaMenu';
import PizzaOrder from '../components/PizzaOrder';

import { useForm } from '../utils/useForm';
import { usePizza } from '../utils/usePizza';

import { OrderStyled } from '../styles/OrderStyles';

const OrderPage = () => {
  const { pizzas } = useStaticQuery(query);

  const [values, updateValue] = useForm({
    name: '',
    email: '',
  });
  const { order, addToOrder, removeFromOrder } = usePizza({});

  return (
    <>
      <SEO title="Order Pizza" />

      <OrderStyled>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>

        <fieldset className="menu">
          <legend>Menu</legend>
          <PizzaMenu pizzas={pizzas.nodes} addToOrder={addToOrder} />
        </fieldset>

        <fieldset className="order">
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            removeFromOrder={removeFromOrder}
            pizzas={pizzas.nodes}
          />
        </fieldset>
      </OrderStyled>
    </>
  );
};

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default OrderPage;
