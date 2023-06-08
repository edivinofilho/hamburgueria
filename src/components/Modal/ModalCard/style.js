import styled from 'styled-components'

export const StyledModalCard = styled.li`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  padding: 0 1rem; 
  margin: .5rem 0;

  > img {
    width: 19%;
    height: 100%;

    border-radius: 5px;
    background-color: var(--ColorGrey100);
  }

  @media (min-width: 280px){
    > img {
      width: 27%;
    }
  }

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding-left: 1.25rem;

    > h2 {
      font-size: 1.1rem;
      font-weight: 700;
    }

    > button {
      background-color: var(--ColorWhite);
    }

    > button > svg {
      fill: var(--ColorGrey300);

      background-color: transparent;
    }
  }
`