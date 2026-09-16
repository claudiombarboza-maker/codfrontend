
import './App.css'

  function App() {

 
function App() {

function trocarSapatos() {

let quantidadePares, preçoPar, valorTotal;
quantidadePares = Number(prompt('Quantidade de pares:'));
preçoPar = Number(prompt('Preço de cada par:'));

valorTotal = quantidadePares * preçoPar;

alert('Valor total R$ ' + valorTotal.toFixed(2));
console.log(valorTotal);

}

function calcularPontos() {
  let vitórias = Number(prompt('Numero de vitórias:'));
  let empates = Number(prompt('Numero de empates:'));
  let pontos = vitórias * 3 + empates;

  alert('O time tem ' + pontos + ' pontos');
  console.log(pontos);
}

function calcularDevs() {
  let devscltclt= Number(prompt('Quantidade de devs CLT:'));
  let devspjpj = Number(prompt('Quantidade de devs PJ:'));
  let devsestagiario = Number(prompt('Quantidade de devs Estagiario:'));

  let totalDevs = devscltclt + devspjpj + devsestagiario;
  alert('O time tem ' + totalDevs + ' desenvolvedores');
}
  return (

<div className="cont-app">
  <h1>Javascript no React</h1>
  <h2>Exercicios</h2>
  <button onClick={calcularDevs}>gui portoes</button>
  <button onClick={calcularPontos} >Campeonato</button>
  <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
  <hr />
</div>

)
}
  }
export default App 
