import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ArticlesPost from './components/articles/articles';
import MoreDetails from './components/moreDetails/moreDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ArticlesPost/>}/>
          <Route exact path='/products/:id' element={<MoreDetails/>}/>
        </Routes>
         
        
      </BrowserRouter>
    </>
  )
}

export default App
