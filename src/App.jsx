/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
const greeting = '¡Bienvenido/a a Stay Strong!'
  return ( 
    <>
      <Navbar />
      <ItemListContainer greeting ={greeting}/>
    </>
  )
}

export default App
