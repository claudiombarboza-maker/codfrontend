
import './App.css'

  function App() {

 function chancesdevs(){

let olhadascll = Number(prompt('Quantas vezes olhou para o celular:'))
let chances = (0.1/(1+500*olhadascll))*100;

alert('As chances dos devs sao ' + chances.toFixed(2) + '%');

let chances2 =1 / chances
alert('A chance de ser reprovado é ' + chances2 + ' de ser aprovado');

}

function pesoVeiculo(){

let pesobruto, caminhaovazio, pscrg
pesobruto = Number(prompt('o peso bruto do chaminhao é:'))
caminhaovazio = Number(prompt('peso do caminhao vazio é:'))

pscrg = pesobruto - caminhaovazio;

alert('o peso da carga é ' + pscrg + 'kg');
}

function salario(){

let salario, diastrabalhados, salariofinal
salario = Number(prompt('o salario mensal é:'))
diastrabalhados = Number(prompt('Os dias trabalhados foram:'))

salariofinal = salario + diastrabalhados;

alert('o salario final é:' + salariofinal)
console.log(salariofinal);
}

function custoigreja(){

let customensal, recibododia, faltaapagar
customensal = Number(prompt('O custo mensal é:'))
recibododia = Number(prompt('O recibimento do dia foi:'))

faltaapagar =  customensal - recibododia;

alert('Falta pagar ' + faltaapagar + ' dos custos mensais da igreja')
console.log(faltaapagar);

}

 function calcularvendas() {
let quantidadeinicial, quantidadefinal, totalvendas
quantidadeinicial = Number(prompt('Quantidades inicial de laranjas'));
 quantidadefinal = Number(prompt('Quantidade final de laranjas'));

totalvendas = quantidadeinicial - quantidadefinal;

alert('Total de laranjas ' + totalvendas + ' vendidas')
console.log(totalvendas);

 }

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
  <button onClick={calcularvendas}>Laranjas</button>
  <button onClick={custoigreja}>igreja</button>
  <button onClick={salario}>Salario mensal</button>
  <button onClick={pesoVeiculo}>peso do caminhao</button>
  <button onClick={chancesdevs}>reprovado ou aaprovado</button>
  
  <hr />
  </div>
)

  }
export default App 
