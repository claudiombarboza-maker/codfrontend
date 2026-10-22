import React, { useState } from 'react'

function Demo() {
const[inputNota1, setInputNota1] = useState('')
const[inputNota2, setInputNota2] = useState('')
const[resultado, setResultado] = useState('Digite as notas e clique no botão para calcular a média')

function calcularMedia(){

    let nota1 = Number(inputNota1)
    let nota2 = Number(inputNota2)
    let media = (nota1 + nota2) / 2
    //alert(media)
    setResultado(media)}
  return (
    <div className='demo'>
<h1>Demo - medias</h1>
    <label htmlFor=""> Nota 1 </label>
    <input type="text" 
    value={inputNota1}
    onChange={(e) => setInputNota1(e.target.value)}
    />
{inputNota1}
    
    <label htmlFor=""> Nota 2 </label>
    <input type="text" 
    value={inputNota2}
    onChange={(e) => setInputNota2(e.target.value)}
    />
    {inputNota2}

<button onClick={calcularMedia}>Calcular Média</button>
<p>
{resultado}
</p>

    </div>
  )
}

export default Demo