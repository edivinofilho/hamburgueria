import { StyledInput } from './style'

export const InputSearch = ({ setSearch }) => {
  
  return (
    <StyledInput type="text" placeholder="Digitar Pesquisa" onChange={(event => setSearch(event.target.value))}></StyledInput>
  )
}