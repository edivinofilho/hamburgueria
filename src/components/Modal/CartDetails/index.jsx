import { StyledCartDetails } from './style'

export const CartDetails = ({ addShoppingCart, setAddShoppingCart }) => {
  
  const totalAmount = (shoppingList) => {
    const total = shoppingList.reduce((acc, curr) => acc + curr.price, 0)

    return total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  const removeAll = () => {
    setAddShoppingCart([])
  }

  
  return (
    <StyledCartDetails>
      <div>
        <p>Total</p>
        <p>{totalAmount(addShoppingCart)}</p>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </StyledCartDetails>
  )
}