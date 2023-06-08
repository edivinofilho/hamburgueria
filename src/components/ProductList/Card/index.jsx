import { StyledCard, StlyedCardDescription, StyledSection, StyledPrice } from './style'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Card = ( {lunchList, addShoppingCart, setAddShoppingCart} ) => {

  const addItem = (product) => {
    if (!addShoppingCart.some((item) => item.id === product.id)) {
      setAddShoppingCart([...addShoppingCart, product])

      toast.success('Item adicionado com sucesso!', {
        transition: Slide,
        autoClose: 1500
      })

    } else {
      toast.error('Este item já foi adicionado!', {
        transition: Slide,
        autoClose: 1500
      })
    }
  }
  
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
            <ToastContainer></ToastContainer>
          </StlyedCardDescription>
        </StyledCard>
      )}
    </>
  )
}