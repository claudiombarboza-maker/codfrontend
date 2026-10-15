import { useState } from "react"


function Feira() {
  const [maça, setMaca] = useState()
function preco(){
    let quantidade = Number(prompt("Digite a quantidade de maçãs que deseja comprar: "));
    if (quantidade < 12){
        setMaca("O preço a ser pago é: R$ " + (quantidade * 0.30).toFixed(2))
    }else{
        setMaca("O preco a ser pago é: R$ " + (quantidade * 0.25).toFixed(2))
    }
  }
    return (
    <div className="precomaca">
      <h2>Feira</h2>
      <button onClick={preco}>Calcular valor</button>
      <p>{maça}</p>
    </div>
  )
}

export default Feira