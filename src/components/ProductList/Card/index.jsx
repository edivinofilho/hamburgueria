export const Card = ( {lunchList} ) => {
  // console.log(lunchList)

  const addItem = (product) => {
    return console.log(product)
  }
  return (
    <>
      {lunchList.map(lunch => 
        <li key={lunch.id}>
          <img src={lunch.img} alt={lunch.name}></img>
          <h2>{lunch.name}</h2>
          <p>{lunch.category}</p>
          <p>{lunch.price}</p>
          <button onClick={addItem(lunch.id)}>Adicionar</button>
        </li>
      )}
    </>
  )
}