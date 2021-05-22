import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { PizzaListStyled, PizzaItemStyled } from './styled';

const Pizza = ({ pizza }) => (
  <PizzaItemStyled>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    <Img fluid={pizza?.image?.asset?.fluid} alt={pizza.name} />
  </PizzaItemStyled>
);

const PizzaList = ({ pizzas }) => (
  <PizzaListStyled>
    {pizzas.map((pizza) => (
      <Pizza key={pizza.id} pizza={pizza} />
    ))}
  </PizzaListStyled>
);

export default PizzaList;
