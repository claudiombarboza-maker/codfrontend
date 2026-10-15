import React, { use } from "react";

function Eventos(){
const [resultado, setResultado] = React.useState()
function deslocamentoparaeventos() {
    let tempodeviagem = Number(prompt("Qual o tempo da viagem?"))
    let estagripado = confirm("Está gripado? (Ok para Sim, Cancelar para Não)")

    if(tempodeviagem <= 45 && estagripado === false) {
        setResultado("Viagem autorizada. Rumo ao show!")
    } else {
        setResultado("Deslocamento inviável. Melhor recusar este evento.")
    }



}
return (
    <div className="Eventos">
        <h2>Deslocamento para Eventos</h2>
        <button onClick={deslocamentoparaeventos}>Verificar Deslocamento</button>
        {resultado}
    </div>
)
}
export default Eventos