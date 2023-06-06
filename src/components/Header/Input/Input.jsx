export const InputSearch = ({ setSearch }) => {
  
  return (
    <input type="text" placeholder="Digitar Pesquisa" onChange={(event => setSearch(event.target.value))}></input>
  )
}