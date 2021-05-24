import styled from 'styled-components';

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid var(--grey);
  border-radius: 5px;
  text-align: center;

  & > * {
    padding: 1rem;
    margin: 0;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;

    &[aria-current],
    .current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  & > *:not(last-child) {
    border-right: none;
  }
`;
