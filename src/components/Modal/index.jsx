import { useEffect, useRef } from 'react'

import { StyledModalOverlay, StyledModalBox, StyledCloseModal, StyledListProduct } from './style'
import { ModalCard } from './ModalCard'

import { CartDetails } from './CartDetails/index'

export const Modal = ({ setIsOpen, addShoppingCart, setAddShoppingCart }) => {

  const modalRef = useRef(null)
  
  useEffect(() => {
    const handleOutClick = (event) => {
      if(!modalRef.current?.contains(event.target)){
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutClick)

    return ()=> {
      window.removeEventListener('mousedown', handleOutClick)

    }
  }, [])
  
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleKeydown = (event) => {
      if(event.key === 'Escape'){
        buttonRef.current?.click()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <StyledModalOverlay role='dialog'>
      <StyledModalBox ref={modalRef}>

        <div>
          <h2>Carrinho de compras</h2>
          <StyledCloseModal ref={buttonRef} onClick={() => setIsOpen(false)}>X</StyledCloseModal>
        </div>
        
        <StyledListProduct>
          <ModalCard addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>
        </StyledListProduct>
        
        <CartDetails addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>

      </StyledModalBox>
    </StyledModalOverlay>
  )
} 