/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './style.css'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer' 
import Categorias from './components/categorias/Categorias'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/productos/ProductList'
import CategoriesProductList from './components/categorias/CategoriesProductList'

function App() {
const greeting = '¡Bienvenido/a a Stay Strong!'
  return ( 
    <>
    <Router>
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={greeting}/>}/>
        <Route exact path="/productos" element={<ProductList/>}/>
        <Route exact path="/categorias" element={<Categorias/>}/>
        <Route exact path="/categoria/:categoriaId" element={<CategoriesProductList/>}/>
      </Routes>
    </Router>
      
      
      
    </>
  )
}

export default App
