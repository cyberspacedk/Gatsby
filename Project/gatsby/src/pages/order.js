/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/SEO';
import PizzaMenu from '../components/PizzaMenu';
import PizzaOrder from '../components/PizzaOrder';

import { useForm } from '../utils/useForm';
import { usePizza } from '../utils/usePizza';
import { calculateOrderTotal } from '../utils/calculateOrderTotal';

import { OrderStyled } from '../styles/OrderStyles';

const OrderPage = () => {
  const { pizzas } = useStaticQuery(query);

  const [values, updateValue] = useForm({
    name: '',
    email: '',
    emailX: '',
  });

  const {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  } = usePizza({ pizzas: pizzas.nodes, values });

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <>
      <SEO title="Order Pizza" />

      <OrderStyled onSubmit={submitOrder}>
        <fieldset disabled={loading}>
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
          {/* Hpot */}
          <input
            type="email"
            name="emailX"
            className="email-x"
            value={values.emailX}
            onChange={updateValue}
          />
        </fieldset>

        <fieldset className="menu" disabled={loading}>
          <legend>Menu</legend>
          <PizzaMenu pizzas={pizzas.nodes} addToOrder={addToOrder} />
        </fieldset>

        <fieldset className="order" disabled={loading}>
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            removeFromOrder={removeFromOrder}
            pizzas={pizzas.nodes}
          />
        </fieldset>

        <fieldset disabled={loading}>
          <h3>Total is - {calculateOrderTotal(order, pizzas.nodes)}</h3>
          <div style={{ color: 'red', textAlign: 'center' }}>
            {error && <p>{error}</p>}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Placing order ...' : 'Order Ahead!'}
          </button>
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
