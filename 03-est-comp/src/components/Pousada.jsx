import React from 'react'

function Pousada() {
const [Conta, setConta] = React.useState()
function calcularValor(){
    let dias = Number(prompt("Quantos dias?"))
    let valorDiaria 
    if(dias <= 5){
        valorDiaria = 100
    }else if(dias <= 10){
        valorDiaria = 90
    }else{
        valorDiaria = 80
    }   
    
    let totalBruto = dias * valorDiaria

    let descontos = totalBruto * 25/100

    let multa = 50

    let totalPagar = totalBruto - descontos + multa
    setConta ("vai pagar: R$" + totalPagar)
    
}
  return (
    <div className='Pousada'>
      <h2>Pousadinha!</h2>
     {/* 1: perguntar quantos dias vai ficar */}
     {/* 2: descobrir o valor da diária */}
     {/* 3: calcular o totral bruto */}
     {/* 4: calcular os descontos */}
     {/* 5: calcular o total a pagar */}
     {/* 6: exibir o resultado */}
     <button onClick={calcularValor}>Fechar Conta</button>
     {Conta}
    </div>
  )
}

export default Pousada