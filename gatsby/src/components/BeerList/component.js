import React from 'react';
import { Link } from 'gatsby';

import { BeerListStyled } from './styled';

const BeerList = ({ beers }) => (
  <>
    <h2 className="center">
      We have {beers.length} Beers Available. Dine in Only!
    </h2>

    <BeerListStyled>
      {beers.map((beer) => {
        const rating = Math.round(beer?.rating?.average);
        return (
          <div key={beer.id} className="beer">
            <img
              src="https://www.dropit.bm/wp-content/uploads/2020/02/6ed3f970-959c-4116-9069-2ff6e9806d7b_1.185ecc36a7b3b42ddcd1f0408ad198f9.jpg"
              alt="Beer"
            />
            <h3>{beer.name}</h3>
            {beer.price}
            <p>
              {'⭐️ '.repeat(rating)}
              <span style={{ filter: 'grayscale(90%)' }}>
                {'⭐️ '.repeat(5 - rating)}
              </span>
              <span>({beer?.rating?.reviews})</span>
            </p>
          </div>
        );
      })}
    </BeerListStyled>
  </>
);

export default BeerList;
