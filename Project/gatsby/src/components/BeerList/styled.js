import styled from 'styled-components';

export const BeerListStyled = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  .beer {
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;

    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
`;
