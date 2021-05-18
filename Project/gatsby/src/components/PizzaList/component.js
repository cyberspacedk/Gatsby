import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Pizza = ({ pizza }) => (
  <div>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <p>{pizza.choose.map((topping) => topping.topping).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </Link>
  </div>
);

const PizzaList = ({ pizzas }) => (
  <div>
    {pizzas.map((pizza) => (
      <Pizza key={pizza.id} pizza={pizza} />
    ))}
  </div>
);

export default PizzaList;
