import styled from 'styled-components'

export const StyledCartDetails = styled.div`
  width: 90%;
  height: 26.5%;

  border-top: .125rem solid var(--ColorGrey100);

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content:  space-between;
  }

  > div > p:nth-child(1) {
    font-size: .8rem;
    font-weight: 600;

    color: var(--ColorGrey600);
  }

  > div > p:nth-child(2) {
    font-size: .8rem;
    font-weight: 600;
    color: var(--ColorGrey300);
  }

  button {
    font-size: 0.9rem;
    color: var(--ColorGrey300);
    font-weight: 600;

    padding: .9rem;

    border-radius: .5rem;
  }
`