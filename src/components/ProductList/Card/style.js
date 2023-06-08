import styled from 'styled-components'

export const StyledCard = styled.li`
  width: 14rem;
  height: 18rem;
  
  border: .125rem solid var(--ColorGrey100);
  border-radius: 5px;
  
  transition: 0.5s;

  > div:nth-child(1) {
    width: 100%;
    height: 45%;

    border-radius: 3px 3px 0 0;

    text-align: center;

    background-color: var(--ColorGrey100);
  }

  > div > img {
    width: 65%;
    height: 100%;

    padding-bottom: .75rem;

    object-fit: cover;
  }
  
  :hover {
    border-color: var(--ColorSucess);
  }
`

export const StlyedCardDescription = styled.div`
  width: 100%;
  height: 50%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .6rem;

  > h2 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  > button {
    width: 6.5rem;
    padding: .6rem 1.25rem;

    border-radius: 5px;

    color: var(--ColorWhite);
    background-color: var(--ColorGrey300);

    transition: 0.5s;
  }

  > button:hover {
    background-color: var(--ColorSucess);
  }
`

export const StyledSection = styled.p`
  font-size: .75rem;
  line-height: 1rem;
  color: var(--ColorGrey300);
`

export const StyledPrice = styled.p`
  color: var(--ColorPrimary);
  font-size: .9rem;
  line-height: 1.5rem;
  font-weight: 500;
`