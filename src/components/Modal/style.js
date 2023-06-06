import styled from "styled-components";

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
  height: 500px;

  max-width: 400px;
  
  padding: 2rem;
  
  background: #fff;

  overflow-y: auto;
`

export const StyledCloseModal = styled.button`
  position: absolute;
  top: 0;
  left: 0;
`