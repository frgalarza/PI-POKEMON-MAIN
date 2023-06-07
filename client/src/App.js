import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Landing Page/LandingPage'
import Home from './Components/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon, addTypes } from './redux/action';
import Detail from './Components/Detail/Detail';
import Nav from './Components/Nav/Nav';
import Form from './Components/Form/Form';
import Error404 from './Components/Error 404/Error404';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
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
        <Route path='/form' element={<Form/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
