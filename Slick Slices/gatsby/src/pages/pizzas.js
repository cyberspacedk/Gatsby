import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';
import PizzaList from '../components/PizzaList';

const PizzasPage = ({ data, pageContext }) => {
  const pizzas = data.pizzas.nodes;

  return (
    <>
      <SEO
        title={
          pageContext.name ? `Pizzas with ${pageContext.name}` : 'All pizzas'
        }
      />
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default PizzasPage;

export const query = graphql`
  query PizzaQuery($name: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $name } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
