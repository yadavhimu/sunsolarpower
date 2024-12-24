import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
// import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}/>
       {/* <Route path='/resources' element={<Resources/>}/> */}
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
