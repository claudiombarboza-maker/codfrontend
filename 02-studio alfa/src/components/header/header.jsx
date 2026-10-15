import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="../../../src/assets/imgs/Alfa-Romeo-Logo.png"
            alt="Logo"
          />
          <span className="logo-text">Studio Alfa</span>
        </div>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Sobre</a>
          <a href="#" className="btn-contatos">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
