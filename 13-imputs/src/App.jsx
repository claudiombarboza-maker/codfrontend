import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Demo from './Pages/Demo'
import Bc2374 from './assets/Componentes/Bc2374'
import Exerc0081 from './Pages/Exerc0081'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='app'>
   
    <Exerc0081/>
    <Demo/>

    
   <Home/>
  </div>
  )
}

export default App
