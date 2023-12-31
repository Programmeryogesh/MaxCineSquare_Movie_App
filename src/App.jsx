import './App.css'
import NavigetionBar from './components/Appbar';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoviesDetailS from './components/movieDetaile';
import Footer from './components/footerComponent';
import {Provider} from 'react-redux'
import {store} from './store/store'
// import NewSearchBar from './components/newSearchBar';
// import { useSelector } from 'react-redux';

function App() {

  // const value = useSelector((state) => state.inputValue);
  // console.log(value);
  return (
    <>
    <Provider store = {store}>
     <BrowserRouter>
     <NavigetionBar/>
     {/* <NewSearchBar/> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='movie/:id' element={<MoviesDetailS/>} />
          <Route path='/search' element={<MoviesDetailS/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    
    
    </>
  )
}

export default App
