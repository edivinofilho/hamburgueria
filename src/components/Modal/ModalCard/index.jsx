import { MdDelete } from 'react-icons/md'
import { StyledModalCard } from './style'

export const ModalCard = ( { addShoppingCart, setAddShoppingCart }) => {
  
  const removeItem = (itemId) => {
    const filteredItems = addShoppingCart.filter(item => item.id !== itemId)
    setAddShoppingCart(filteredItems)
  }
  
  return (
    <>
      {addShoppingCart.map(lunch => 
        <StyledModalCard key={lunch.id}>
          <img src={lunch.img} alt={lunch.name}></img>
        
        <div>
          <h2>{lunch.name}</h2>  
          <button onClick={() => removeItem(lunch.id)}>
            <MdDelete size={22}/>
          </button>
        </div>
        </StyledModalCard>
      )}
    </>
  )
}