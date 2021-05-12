import React from 'react';
import { Link } from 'gatsby';

const navData = [
  {
    src: '/',
    label: 'Hot Now',
  },
  {
    src: '/pizzas',
    label: 'Pizza Menu',
  },
  {
    src: '/',
    label: 'LOGO',
  },
  {
    src: '/slicemasters',
    label: 'Slice Masters',
  },
  {
    src: '/order',
    label: 'Order Ahead!',
  },
];

const Nav = () => (
  <nav>
    {navData.map(({ src, label }) => (
      <li>
        <Link to={src}>{label}</Link>
      </li>
    ))}
  </nav>
);

export default Nav;
