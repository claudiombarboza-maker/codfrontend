import React from 'react'

function Votar() {
    const [Total, setTotal] = React.useState()

function CalcularVotos(){
    let idade = Number(prompt("Quantos anos você tem?"))
    if(idade < 16){
        setTotal("Você não pode votar!")
    } else if(idade >= 16 && idade < 17){
        setTotal("voto facultativo")
    } else if(idade >= 18 && idade < 65){
        setTotal("voto obrigatório")
    } else {
        setTotal("voto facultativo")
    }
}

  return (
    <div className='Votar'>
      <h2>Eleições!!</h2>
      <button onClick={CalcularVotos}>Digite sua Idade</button>
    {Total}
    </div>
  )
}

export default Votar