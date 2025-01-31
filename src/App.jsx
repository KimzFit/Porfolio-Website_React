import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Navbar from './Components/Navbar'
import Themes from './Components/Themes'
function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Themes/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
