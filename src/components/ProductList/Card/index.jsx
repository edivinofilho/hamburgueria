import { StyledCard, StlyedCardDescription, StyledSection, StyledPrice } from './style'

export const Card = ( {lunchList, addShoppingCart, setAddShoppingCart} ) => {
  // console.log(lunchList)

  const addItem = (product) => {
    if (!addShoppingCart.some((item) => item.id === product.id)) {
      setAddShoppingCart([...addShoppingCart, product]);
    } else {
      console.log('Item já adicionado!')
    }
  }
  // console.log(addShoppingCart)

  return (
    <>
      {lunchList.map(lunch => 
        <StyledCard key={lunch.id}>
          <div>
            <img src={lunch.img} alt={lunch.name}></img>
          </div>
          <StlyedCardDescription>
            <h2>{lunch.name}</h2>
            <StyledSection>{lunch.category}</StyledSection>
            <StyledPrice>{lunch.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</StyledPrice>
            <button onClick={() => addItem(lunch)}>Adicionar</button>
          </StlyedCardDescription>
        </StyledCard>
      )}
    </>
  )
}