import styled from 'styled-components';

export const PizzaListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const PizzaItemStyled = styled.div`
  flex-basis: 31%;
  display: flex;
  flex-direction: column;
  @media (min-width: 680px) and (max-width: 900px) {
    flex-basis: 47%;
  }
  @media (max-width: 680px) {
    flex-basis: 95%;
  }
  p,
  a {
    height: 50px;
    margin: 0;
  }
  .gatsby-image-wrapper {
    display: block;
    max-width: 100%;
    height: 400px;
  }
`;
