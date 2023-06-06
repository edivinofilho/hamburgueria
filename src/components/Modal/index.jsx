import { useEffect, useRef } from 'react'

import { StyledModalOverlay, StyledModalBox, StyledCloseModal } from './style'
import { ModalCard } from './ModalCard'

export const Modal = ({ setIsOpen, addShoppingCart, setAddShoppingCart }) => {

  const modalRef = useRef(null)
  
  useEffect(() => {
    const handleOutClick = (event) => {
      if(!modalRef.current?.contains(event.target)){
        console.log(event.target)
        setIsOpen(false)

      }
      // console.log(event.target)
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

  console.log(addShoppingCart)

  return (
    <StyledModalOverlay role='dialog'>
      <StyledModalBox ref={modalRef}>
        <StyledCloseModal ref={buttonRef} onClick={() => setIsOpen(false)}>Fechar</StyledCloseModal>
          <ModalCard addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>
          
      </StyledModalBox>
    </StyledModalOverlay>
  )
} 