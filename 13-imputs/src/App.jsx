import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Demo from './Pages/Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='app'>
    <Demo/>

    
   <Home/>
  </div>
  )
}

export default App
