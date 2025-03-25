import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ArticlesPost from './components/articles/articles';
import MoreDetails from './components/moreDetails/moreDetails';
import CartProvider from './components/context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<ArticlesPost/>}/>
          <Route exact path='/products/:id' element={<MoreDetails/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
