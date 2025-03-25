import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ArticlesPost from './components/articles/articles';
import MoreDetails from './components/moreDetails/moreDetails';
import CartProvider from './components/context/CartContext';
import Checkout from './components/checkout/checkout';
import Login from './components/login/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<ArticlesPost/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/products/:id' element={<MoreDetails/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
