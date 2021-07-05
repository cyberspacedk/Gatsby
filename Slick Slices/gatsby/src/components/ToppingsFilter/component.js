import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { countPizzasInToppings } from './utils';
import { ToppingStyled } from './styled';

const ToppingsFilter = () => {
  const { pizzas } = useStaticQuery(graphql`
    query Toppings {
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
      <ToppingStyled>
        <Link to="/pizzas">
          <span className="name">All</span>
          <span className="count">{countPizzas.length}</span>
        </Link>

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
