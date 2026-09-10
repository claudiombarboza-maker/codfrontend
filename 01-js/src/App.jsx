
import './App.css'

function App() {
function testar(){
  alert("barca das vagabundas")

let nome = prompt('qual seu nome?')
let bocaDaRua = nome
alert(nome + ', seu nome ta na bocaDaRua')

}

function calcularMedia(){
let nota1 = Number(prompt('coloque a primeira nota:'))
let nota2 = Number(prompt('coloque a segunda nota:'))

let media = (nota1+nota2) / 2
alert('Sua média: ' + media)
}

return (
  <div className="cont-app" >
<h1>Javascript no React</h1>
<button onClick={testar}>Testar</button>
<button onClick={calcularMedia}>Média</button>




</div>
  
  )
}

export default App
