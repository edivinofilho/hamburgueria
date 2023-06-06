import { Card } from './Card/index'

export const ProductList = ( {lunchList, addShoppingCart, setAddShoppingCart} ) => {
  return (
    <ul>
      <Card lunchList={lunchList} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>
    </ul>
  )
}