import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'

function App() {
  return (
    <>
      <h1 className='app-heading'>E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
    </>
  )
}

export default App
