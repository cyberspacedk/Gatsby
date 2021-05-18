import React from 'react';
import { Link } from 'gatsby';

const Pizza = ({ pizza }) => (
  <div>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <p>{pizza.choose.map((topping) => topping.topping).join(', ')}</p>
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
