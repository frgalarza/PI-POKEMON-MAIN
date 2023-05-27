import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Landing Page/LandingPage'
import Home from './Components/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon, addTypes } from './redux/action';
import Detail from './Components/Detail/Detail';
import Nav from './Components/Nav/Nav';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log('hola')
    dispatch(addPokemon()) 
    dispatch(addTypes())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
