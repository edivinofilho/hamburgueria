import { useEffect } from 'react'
import Delete from '../../../assets/bin.png'

export const ModalCard = ( { addShoppingCart, setAddShoppingCart }) => {
  
  const removeItem = (itemId) => {
    const filteredItems = addShoppingCart.filter(item => item.id !== itemId)
    setAddShoppingCart(filteredItems)
  }
  
  return (
    <>
      {addShoppingCart.map(lunch => 
        <li key={lunch.id}>
          <img src={lunch.img} alt={lunch.name}></img>
          <h2>{lunch.name}</h2>
          <p>{lunch.category}</p>
          <p>{lunch.price}</p>
          <button onClick={() => removeItem(lunch.id)}>
            <img src={Delete} alt="Imagem de uma lixeira para remover o produto selecionado" /></button>
        </li>
      )}
    </>
  )
}