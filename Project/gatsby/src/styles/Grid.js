import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

export const ItemLoading = styled.div`
  text-align: center;
  position: relative;

  p {
    display: block;
    transform: rotate(-2deg) translateY(-50%);
    position: absolute;
    left: 0;
    width: 100%;
  }

  @keyframes shine {
    from {
      background-position: 1000px 0;
    }
    to {
      background-position: -40px 0;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    font-size: 0;

    &.loading {
      --shine: white;
      --background: var(--grey);
      background-image: linear-gradient(
        90deg,
        var(--background) 0px,
        var(--shine) 40px,
        var(--background) 80px
      );
      animation: shine 3s infinite linear;
    }
  }

  .mark {
    display: inline;
  }
`;
