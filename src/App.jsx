import { useState, useEffect} from 'react'

import { GlobalStyle } from './styles/globalStyles' 
import { GlobalReset } from './styles/globalReset'

import { api } from './services/api'

import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

export const App = () => {
  const [lunchList, setLunchList] = useState([])
  const [addShoppingCart, setAddShoppingCart] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get('/products', {
          params: {
            name_like: search,
          }
        })
        
        setLunchList(response.data)
        // console.log(response.data)
      } catch (error){
          console.log(error)
      } finally {

      }
      
    }
    loadData()
  }, [search])
  // console.log(lunchList)

  return (
    <>
      <GlobalReset />
      <GlobalStyle />

      <Header addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart} setSearch={setSearch}/>
      <ProductList lunchList={lunchList} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>      

    </>
  )
}