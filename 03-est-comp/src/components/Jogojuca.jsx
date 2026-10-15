import React from 'react'
import { useState } from 'react'

function Jogojuca() {
    const [Resultado, setResultado] = useState()

function classificar() {
   let pontos = Number(prompt("Digite a pontuação do migo Juca:"))
   if(pontos <= 10) {
    setResultado("Deu Red...")
   // )else if(pontos >10 && pontos <= 100){
   }else if(pontos <= 100){
    setResultado("Deu Bom...")
   }else if(pontos <= 200){
    setResultado("Deu Ótimo...")
    }else{
    setResultado("Farmou...")
   }
}

  return (
    <div className="Jogo">
        <h2>Jogo do migo Juca</h2>
        <button onClick={classificar}>Classificar</button>
        {Resultado}
    
    </div>
  )
}

export default Jogojuca