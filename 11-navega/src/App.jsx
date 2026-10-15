// 12-peErnanBuco

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './componentes/Home'
import Oferta from './componentes/Oferta'
import Compras from './componentes/Compras'

function App() {
  const [pagina, setpagina] = useState(0)

  function mostrarhome() {}

  return (
    <div className="App">

      <nav>
        <button onClick={mostrarhome}>Home</button>
        <button onClick={() => setpagina(1)}>Ofertas</button>
        <button onClick={() => setpagina(2)}>Compras</button>
      </nav>

    <h1>Navegação</h1>

    {pagina === 0 && <Home/> }
    {pagina === 1 && <Oferta /> }
    {pagina === 2 && <Compras/> }

    </div>
  )
}

export default App
