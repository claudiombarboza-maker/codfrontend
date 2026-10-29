import { useState } from "react"

function Media33() {

  const [nota, setNota] = React.useState('')
  const [resultado, setResultado] = React.useState('Digita ai')

  function calcularMedia() {
  }

  return (
   
    <div className='card'> 
      <h2>Media</h2>
      <label htmlFor="">Nota</label>
      <input 
        type="text" 
        value={nota} 
        onChange={(e) => setNota(e.target.value)} 
      />
      <button onClick={calcularMedia}>Média</button>

      {resultado}
    </div>
  )
}


export default Media33