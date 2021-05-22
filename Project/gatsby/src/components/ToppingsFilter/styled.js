import styled from 'styled-components';

export const ToppingStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--grey);
    border-radius: 2px;
    padding: 5px;

    .count {
      background: white;
      padding: 2px 5px;
    }

    .active {
      background: var(--yellow);
    }
  }

  a span {
    margin-right: 1rem;
  }
`;
