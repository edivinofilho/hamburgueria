export const Card = ( {lunchList, addShoppingCart, setAddShoppingCart} ) => {
  // console.log(lunchList)

  const addItem = (product) => {
    if (!addShoppingCart.some((item) => item.id === product.id)) {
      setAddShoppingCart([...addShoppingCart, product]);
    } else {
      console.log('Item já adicionado!')
    }
  }
  // console.log(addShoppingCart)

  return (
    <>
      {lunchList.map(lunch => 
        <li key={lunch.id}>
          <img src={lunch.img} alt={lunch.name}></img>
          <h2>{lunch.name}</h2>
          <p>{lunch.category}</p>
          <p>{lunch.price}</p>
          <button onClick={() => addItem(lunch)}>Adicionar</button>
        </li>
      )}
    </>
  )
}