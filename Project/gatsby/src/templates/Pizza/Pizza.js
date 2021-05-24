import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { PizzaGridStyled } from './styled';

const Pizza = ({ data }) => {
  const { pizza } = data;
  return (
    <PizzaGridStyled>
      <Img fluid={pizza.image.asset.fluid} />
      <div>
        <h2 className="mark">{pizza.name}</h2>
        <ul>
          {pizza.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </ul>
      </div>
    </PizzaGridStyled>
  );
};

// dynamic query with param
export const pizzaPageQuery = graphql`
  query PizzaPageQuery($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;

export default Pizza;
