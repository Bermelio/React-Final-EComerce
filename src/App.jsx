import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ArticlesPost from './components/articles/articles';
import HomeComponent from './components/homeComp/homeComp'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomeComponent/>}/>
        </Routes>
         
        <ArticlesPost/>
      </BrowserRouter>
    </>
  )
}

export default App
