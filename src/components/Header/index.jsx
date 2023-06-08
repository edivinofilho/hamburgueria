import Logo from '../../assets/logo.png'

import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'

import { StyledHeader, StyleLogoContainer, StyleHeaderContent, StyledForm } from "./style"

import { InputSearch } from "./Input/Input"
import { useState } from "react"
import { Modal } from "../Modal/index"

export const Header = ( { addShoppingCart, setAddShoppingCart, setSearch } ) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledHeader>
      <StyleHeaderContent>
        <StyleLogoContainer>
          <img src={Logo} alt="Logo Burguer Kenzie nas cores preto e vermelho" />

          <form onSubmit={handleSubmit}>
            <div>
              <button onClick={() => setIsOpen(true)}>
                <FaShoppingCart size={20}/>
                <span>{addShoppingCart.length}</span>
              </button>

            </div>
            {isOpen ? <Modal setIsOpen={setIsOpen} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}>Teste</Modal> : null}

          </form>
        </StyleLogoContainer>

        <StyledForm onSubmit={handleSubmit}>
          <InputSearch setSearch={setSearch}/>
          <button type="submit">
            <AiOutlineSearch size={15}/>
          </button>
        </StyledForm>
    </StyleHeaderContent>
  </StyledHeader>
  )
}