import React from 'react'

function Bc2374() {
  const[pneu, setPneu] = React.useState('')
  const[digitada, setDigitada] = React.useState('')
  const[diferenca, setDiferenca] = React.useState('Digita ai')
  function calcularPressao(){
    let pressao = Number(digitada) - Number(pneu)
    setDiferenca(`A diferença é ${pressao}`)    
  }

  return (
    <div className='bc2374'>
        <h2>BC 2374 - pneu</h2>
        <label htmlFor="">Pressão pneu</label>
        <input type="text"  
            value={pneu} 
            onChange={(e) => setPneu(e.target.value)}
            
        />
         <label htmlFor="">Pressão desejada </label>
        <input type="text"  
            value={digitada} 
            onChange={(e) => setDigitada(e.target.value)}
            
        />
        <button onClick={calcularPressao}>Calcular</button>
        
        {diferenca}
    </div>
  ) 
}

export default Bc2374