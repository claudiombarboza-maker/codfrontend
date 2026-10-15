import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Oraçaoaprendiz from './assets/componentes/Oraçaoaprendiz'
import Oraçaoback from './assets/componentes/Oraçaoback'
import Oraçaoprogamador from './assets/componentes/Oraçaoprogamador'
import Orçaoestudante from './assets/componentes/Orçaoestudante'
import Frontend from './assets/componentes/Frontend'


function App() {
  const [oraçao, setOraçao] = useState(0)
function mostrarOraçao() {}




  return (
    <div className='App'>
<nav>
<button onClick={() => setOraçao(0)}>Oraçao do aprendiz</button>
<button onClick={() => setOraçao(1)}>Oraçao do backend</button>
<button onClick={() => setOraçao(2)}>Oraçao do programador</button>
<button onClick={() => setOraçao(3)}>Oraçao do estudante</button>
<button onClick={() => setOraçao(4)}>Oraçao do frontend</button>

</nav>

<h1>Orações</h1>

{oraçao === 0 && <Oraçaoaprendiz/> }
{oraçao === 1 && <Oraçaoback/> }
{oraçao === 2 && <Oraçaoprogamador/> }
{oraçao === 3 && <Orçaoestudante/> }
{oraçao === 4 && <Frontend/> }
      </div>

         )
}

export default App
