import React from 'react'

function Fumaça() {
    const [resultado, setResultado] = React.useState()
    function TestarFumaça() {
        let Criança = confirm("tem crianças pequenas? (Ok para Sim, Cancelar para Não)")
        let velocidadeDoVento = Number(prompt("Velocidade do vento"))

        if(Criança <=0 && velocidadeDoVento >= 0.5) {
            setResultado("Fumaça liberada. Que comecem os mistérios!")
        } else {
            setResultado("Fumaça bloqueada. Aguardar condições ideais!")
        }

    }
  return (
    <div className="Fumaça">
        <h3>Fumaça</h3>
        <button onClick={TestarFumaça}>Testar Fumaça</button>
        {resultado}
    </div>
  )
}

export default Fumaça