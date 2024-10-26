import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Page/Home';
import RecipeForm from './components/Page/RecipeForm';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Update from './components/Page/Update';



function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipeform' element={<RecipeForm/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
