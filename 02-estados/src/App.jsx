import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [saida, setsaida] = useState(0)

  function rolarD6(){
          let n = Math.ceil(Math.random()*6 )
          setsaida(n)
  }
  function rolarD8(){
          let n = Math.ceil(Math.random()*8 )
          setsaida(n)
  }
   function rolarD12(){
          let n = Math.ceil(Math.random()*12 )
          setsaida(n)
  }

  function rolarD20(){
          let n = Math.ceil(Math.random()*20 )
          setsaida(n)
  }

  function rolarD100(){
          let n = Math.ceil(Math.random()*100 )
          setsaida(n)
  }

   function calcularmedia(){
    let nota1 = Number(prompt("Nota 1"))
     let nota2 = Number(prompt("Nota 2"))
    let media = (nota1 + nota2) / 2
          setsaida(media)
  }
  return (
    <div className='App'>
      <h1>Estados!</h1>
      <button onClick={calcularmedia}>Media</button>
      <button onClick={rolarD6}>D6</button>
      <button onClick={rolarD8}>D8</button>
      <button onClick={rolarD12}>D12</button>
      <button onClick={rolarD20}>D20</button>
      <button onClick={rolarD100}>D100</button>
      <button>Validar</button>
      <p>Resultado: {saida}</p>
    </div>

  )
}

export default App
