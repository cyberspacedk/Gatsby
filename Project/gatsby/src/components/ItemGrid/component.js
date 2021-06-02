import React from 'react';

import { ItemsGridStyled, ItemStyled } from '../../styles/Grid';

const ItemGrid = ({ items }) => {
  const r = 5;

  return (
    <ItemsGridStyled>
      {items.map((item) => (
        <ItemStyled>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            style={{
              backgroundImage: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
            alt={item.name}
          />
        </ItemStyled>
      ))}
    </ItemsGridStyled>
  );
};

export default ItemGrid;
