import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navBar/navBar'
import { Carwidget } from './components/navBar/Carwidget'
import { ItemListContainer } from './components/navBar/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='Titulo'>ECommerce</h1>
    <NavBar></NavBar>
    <ItemListContainer className='items' greetings={"Lista de Items"}></ItemListContainer>
    </>
  )
}

export default App
