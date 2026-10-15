import { useState } from "react"

function Media() {
const [Media, setMedia] = useState()
function calcularMedia() {
   let n1 = Number(prompt("Digite sua primeira nota! "))
   let n2 = Number(prompt("Digite sua segunda nota!"))
   let total = (n1 + n2 )/2
   if(total >= 7){
    setMedia("Mano juca passo! com a média de: " + total)
   }else{
    setMedia("Mano juca reprovou! " + total)
   }
 }  
 return (
    <div className="Media">
        <h2>Media do migo Juca</h2>
        <button onClick={calcularMedia}>Média</button>
        <p>{Media}</p>
    </div>
  )
}

export default Media