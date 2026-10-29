import React from 'react'

function Bee1759() {
     const [qtd, setQtd] = React.useState('')
  const [resultado, setResultado] = React.useState('Digita ai')

function calcularHo() {
  let n = Number(qtd)
  if (n > 0) {
    let ho = ""
    for (let i = 0; i < n - 1; i++) {
      ho += "Ho "
    }
    ho += "Ho!"
    setResultado(ho)
  } else {
    setResultado('')
  }
}

  return (
    <div className='bee1759'>
      <h2>bee1759 - Ho Ho Ho</h2>
      <label htmlFor="">Quantidade de Ho</label>
      <input type="text"
        value={qtd}
        onChange={(e) => setQtd(e.target.value)}
      />
      <button onClick={calcularHo}>Calcular</button>

      {resultado}
    </div>
  )
}

export default Bee1759