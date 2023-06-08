import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  background-color: var(--ColorGrey100);

  @media (max-width: 760px) {
    height: 9rem;

    padding: 30px 5px;
  }
`

export const StyleHeaderContent = styled.div`
  width: 100%;
  max-width: 64.5rem;
    
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: .625rem;
  flex-wrap: wrap;
`

export const StyleLogoContainer = styled.div`
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.7rem 0 0;

  > form > div > button {
    width: 2.5rem;
    height: 2.5rem;
    position: relative;

    background-color: transparent;

    svg {
      fill: var(--ColorGrey300);
    }
  }

  > form > div > button > span {
    width: 25px;
    height: 25px;

    position: absolute;
    top: -.4rem;
    right: -.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    
    color: var(--ColorWhite);

    background: var(--ColorSucess)
  }

  @media (max-width: 760px) {
    width: 90%;
  }
`

export const  StyledForm = styled.form`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.7rem;

  border: 2px solid var(--ColorGrey300);
  border-radius: 6px;

  background: var(--ColorWhite);

  button {
    width: 30px;
    height: 30px;

    border-radius:8px;
    background: var(--ColorSucess);
  }

  svg {
    fill: var(--ColorWhite);
  }

  @media (max-width: 760px) {
    width: 90%;

    padding: 0.3rem 1rem;
  }
`