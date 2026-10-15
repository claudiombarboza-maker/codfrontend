import React from 'react'

function Palco(){
const [resultado, setResultado] = React.useState()
function entradanopalco() {
let som = confirm("tem som?")
let figurino = confirm("o figurino esta completo?")

if (som && figurino) {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
    } else if (!som && figurino) {
      setResultado("Sem som. Realizar apresentação alternativa no salão.")
    } else if (som && !figurino) {
      setResultado("Faltando parte do figurino. Te vira no improviso!")
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer...")
    }
  }


    return (
        <div className="Palco">
            <h2>Palco</h2>
            <button onClick={Palco}>Show</button>
        </div>
    )
}

export default Palco