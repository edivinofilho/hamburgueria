import styled from 'styled-components'

export const StyledProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1rem, 100%, 1.9rem);

  margin: 1rem auto;
  padding: 0 .6rem;

  max-width: 64.5rem;
`