import styled from 'styled-components'

export const StyledModalOverlay = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0,0,0,0.4);
`

export const StyledModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;

  max-width: 400px;
    
  background: #fff;

  overflow-y: auto;

  > div:nth-child(1) {
    width: 100%;
    height: 3.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem 1.3rem;

    color: var(--ColorWhite);
    font-size: .7rem;
    background-color: var(--ColorPrimary);
  }
`

export const StyledCloseModal = styled.button`
  color: var(--ColorWhite);
  font-size: .9rem;

  background-color: var(--ColorPrimary);
`

export const StyledListProduct = styled.ul`
  width: 100%;
  height: 62%;

  background-color: red;

  overflow-x: auto;
`