import React from 'react';
import { graphql } from 'gatsby';

import PizzaList from '../components/PizzaList';

const PizzasPage = ({ data }) => {
  console.log(data);
  const pizzas = data.pizzas.nodes;

  return (
    <>
      <p>Hey! There are {pizzas.length} Pizzas !!</p>
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default PizzasPage;

export const query = graphql`
  query Pizza {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        choose {
          id
          topping
          vegetarian
        }
      }
    }
  }
`;
