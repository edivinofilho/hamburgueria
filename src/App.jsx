import { useState, useEffect} from 'react'

import { GlobalStyle } from './styles/globalStyles' 
import { GlobalReset } from './styles/globalReset'

import { api } from './services/api'

import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

export const App = () => {
  const [lunchList, setLunchList] = useState([])
  const [addShoppingCart, setAddShoppingCart] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/products')
      setLunchList(response.data)
      // console.log(response.data)
    }
    loadData()
  }, [])
  // console.log(lunchList)

  return (
    <>
      <GlobalReset />
      <GlobalStyle />

      <Header />
      <ProductList lunchList={lunchList} addShoppingCart={addShoppingCart} setAddShoppingCart={setAddShoppingCart}/>      
    </>
  )
}