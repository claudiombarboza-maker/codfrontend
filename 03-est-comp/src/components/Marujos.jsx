import React from 'react'

function Marujos() {
    const [resultado, setTotal] = React.useState()

    function TestarRecrutamento() {
        let sabeNadar = confirm("Sabe nadar? (Ok para Sim, Cancelar para Não)")
        let idade = Number(prompt("Quantos anos você tem?"))
        let recomendação = confirm("Tem recomendação de algum Marujo? (Ok para Sim, Cancelar para Não)")

        if(sabeNadar && idade > 16){
            setTotal("Você pode ser Recrutado!")
        } else if (!sabeNadar && recomendação && idade >=14){
            setTotal("Aprovado sob recomendação. Monitorar nas primeiras viagens!")
        } else {
            setTotal("Reprovado. Volte quando estiver mais preparado para o mar!")
        }
    }
  return (
    <div className='Marujos'>
      <h3>Marujos</h3>
      <button onClick={TestarRecrutamento}>Recrutamento</button>
      {resultado && <p>{resultado}</p>}
    </div>
  )
}

export default Marujos