import styled from 'styled-components'

export const StyledProductList = styled.ul`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1rem, 100%, 1.9rem);

  margin: 1rem auto;
  padding: 0 1rem;

  max-width: 64rem;

  @media (max-width: 420px) {
    height: 60vh;
    
    display: flex;
    flex-wrap: nowrap;

    overflow-x: auto;
    
    margin-top: 1.9rem;
    padding-left: 1.25rem;

    ::-webkit-scrollbar {
      height: .35rem;
    }
  }

  @media (min-width: 420px) {
    justify-content: center;
  }
`