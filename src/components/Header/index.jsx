import shoppingCart from "../../assets/shoppingCart.png"
import Lupa from "../../assets/lupa.png"

import { StyledHeader } from "./style"

import { InputSearch } from "./Input/Input"

export const Header = () => {
  return (
    <StyledHeader>
      <p><span>Burguer</span> Kenzie </p>

      <div>
          <img src={shoppingCart} alt="imagem de um carrinho de compras com o contador de produtos adicionados"/>
          <span>0</span>
          <InputSearch />
          <button>
          <img src={Lupa} alt="imagem de uma lupa para fazer a busca"/>
          </button>
      </div>
    </StyledHeader>
  )
}