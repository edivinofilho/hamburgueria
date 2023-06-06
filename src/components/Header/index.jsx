import shoppingCart from "../../assets/shoppingCart.png"
import Lupa from "../../assets/lupa.png"

import { StyledHeader } from "./style"

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
      <p><span>Burguer</span> Kenzie </p>

      <form onSubmit={handleSubmit}>
        <button onClick={() => setIsOpen(true)}>
          <img src={shoppingCart} alt="imagem de um carrinho de compras com o contador de produtos adicionados"/>
        </button>
        {isOpen ? <Modal setIsOpen={setIsOpen} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}>Teste</Modal> : null}

        <span>{addShoppingCart.length}</span>
      </form>

      <form onSubmit={handleSubmit}>
          <InputSearch setSearch={setSearch}/>
        <button type="submit">
          <img src={Lupa} alt="imagem de uma lupa para fazer a busca"/>
        </button>
      </form>
    </StyledHeader>
  )
}