import { Card } from './Card/index'

import { StyledProductList } from './style'

export const ProductList = ( {lunchList, addShoppingCart, setAddShoppingCart} ) => {
  return (
    <StyledProductList>
      <Card lunchList={lunchList} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>
    </StyledProductList>
  )
}