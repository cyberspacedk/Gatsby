import styled from 'styled-components';
import stripes from '../../assets/images/stripes.svg';

export const ContentStyles = styled.div`
  background-color: #fff;
  padding: 2rem;
`;

export const SiteBorderStyled = styled.div`
  max-width: 100rem;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: #fff url(${stripes});
  background-size: 150rem;
  padding: 0.5rem;
  padding: clamp(0.5rem, 1vw, 2.5rem);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.444);
  border: 5px solid #fff;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
