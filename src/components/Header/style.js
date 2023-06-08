import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  padding-top: .65rem;
  padding-bottom: .65rem;

  background-color: var(--ColorGrey100);
`

export const StyleHeaderContent = styled.div`
  width: 100%;
  height: auto;
  max-width: 64.5rem;
    
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: .65rem;
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
    width: 1.6rem;
    height: 1.6rem;

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
    width: 1.875rem;
    height: 1.875rem;

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