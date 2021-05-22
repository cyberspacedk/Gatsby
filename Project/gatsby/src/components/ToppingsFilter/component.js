import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { countPizzasInToppings } from './utils';
import { ToppingStyled } from './styled';

const ToppingsFilter = () => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query Toppings {
      toppings: allSanityTopping {
        nodes {
          name
          vegetarian
          id
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            id
            name
          }
        }
      }
    }
  `);

  const countPizzas = countPizzasInToppings(pizzas.nodes);

  return (
    <div>
      <p>Toppings</p>
      <ToppingStyled>
        {countPizzas.map((topping) => (
          <Link key={topping.id} to={`/topping/${topping.name}`}>
            <span className="name">{topping.name}</span>
            <span className="count">{topping.count}</span>
          </Link>
        ))}
      </ToppingStyled>
    </div>
  );
};
export default ToppingsFilter;
