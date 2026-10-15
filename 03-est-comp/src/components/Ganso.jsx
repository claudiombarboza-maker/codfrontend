import React from 'react'

function Ganso() {
    const [resultado, setResultado] = React.useState()
    function calcularPovisões() {
        let marujos = Number(prompt("Quantos marujos?"));
        let comidas = Number(prompt("Quantas quilos de Comidas?"));
        let comidasPorMarujo = comidas / marujos;

        if (marujos >= 10 && comidaPorMarujo >= 1.5){
            setResultado("Provisões suficientes para todos os marujos!");
        } else {
            setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje!");
        }
    }
  return (
    <div className="Ganso">
      <h3>Ganso</h3>
      <button onClick={calcularPovisões}>Ganso - provisões</button>
    </div>
  )
}

export default Ganso