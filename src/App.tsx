import React from 'react';
import Base from './Components/Base.tsx';
import InputField from './Components/InputField.tsx';
import Secure from './Components/Secure.tsx';
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from './Components/Home.tsx';
import './App.css';


function App() {
 
  return (
    <>
<BrowserRouter>
<Routes>
  <Route  path="/" element = {<Home/>}/>
  <Route path= "/secure" element = {<Secure/>}/>
</Routes>
</BrowserRouter>
    {/* <div className = 'rootBox'>
    <Base />
      
      <InputField /></div>
       */}
    </>
  )
}

export default App
