import './Main.css'


function Main(){
    return(
        <main className='main'>
        <section className='hero'>
        <h1>Criamos sites que funcionam</h1>
        <p>
            Layouts responsivos, rapidos e acessiveis para seu negocio crescer na web.
        </p>
        <div className= "hero-buttons">
          <a href="#orçamento" className='btn-promary'>
            Peça o orçamento
            </a>
         <a href="#portifolio" className='btn-secondary'>
            Ver portifolio
            </a>
        </div>
     <section>
     </section className='serviços'>
       <h2> Nossos serviços</h2>

        <div className= "serviços-grid">
          <ServicoCard
            titulo="design do interface"
            icone="#"
            descriçao="telas claras, pensadas para o usuario"
          />
        </div>
      </section> 
    </main>
  );
}

export default Main;