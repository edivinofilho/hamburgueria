import styled from 'styled-components'

export const StyledProductList = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1rem, 100%, 1.9rem);

  margin: 1rem auto;
  padding: 0 .6rem;

  max-width: 64.5rem;

  @media(max-width: 420px){
    height: 60vh;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;

    padding-left: 1.25rem; 

    ::-webkit-scrollbar {
      height: .35rem;
    }
  }
`