import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/index.css';

function Inicio() {

  const toggleMenu = () => {
    const nav = document.querySelector('.Navbar ul');
    nav.classList.toggle('show');
  };

  return (
    <>
      {/* Header */}
      <header className="head">
        <div className="logo">
          <img src="/img/WhatsApp%20Image%202025-04-09%20at%204.21.12%20PM.jpeg" alt="Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <nav className="Navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/#home">Nosotros</a></li>
            <li><a href="/galeria">Vehículos</a></li>
            <li><a href="/contacto">Contáctenos</a></li>
            <li><i className="bi bi-brightness-high-fill" id="toggleDark"></i></li>
          </ul>
        </nav>
      </header>


      <a className="ir-arriba" href="#" title="Volver arriba">
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-arrow-up fa-stack-1x fa-inverse"></i>
        </span>
      </a>

      <div className="slider-container">
        <div className="slide">
          <ul>
            <li><img src="/img/slider-1.jpg" alt="Imagen 1" /></li>
            <li><img src="/img/slider-2.jpg" alt="Imagen 2" /></li>
            <li><img src="/img/slider-3.jpg" alt="Imagen 3" /></li>
            <li><img src="/img/slider-4.jpg" alt="Imagen 4" /></li>
          </ul>
        </div>
        <div className="slider-texto">
          <h2>Bienvenidos a Autos Al Piso</h2>
        </div>
      </div>


      <main className="content home" id="home">
        <h2 className="title fade-in">¿Quiénes somos?</h2>
        <p className="fade-in">
          En <strong>Autos Al Piso</strong>, si buscan naves que rocen el asfalto y tengan un look que rompe cuellos,
          llegaron al lugar indicado. En nuestra web encontrarán una selección de autos al piso que son verdaderas obras de arte sobre ruedas.
          ¡Elijan uno y cómprennos, NECESITAN un auto al piso y nosotros queremos tu plata!
        </p>

        <div className="botones fade-in">
          <a href="#">Conocer más</a>
          <a href="/galeria">Explorar vehículos</a>
        </div>
      </main>


      <footer className="footer">
        <p>© 2025 Autos Al Piso. Todos los derechos reservados.</p>
        <div className="redes">
          <a href="#"><img src="img\github-icono.webp" alt="GitHub" width="24" /></a>
          <a href="#"><img src="img\linkedin-icono.webp" alt="LinkedIn" width="24" /></a>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}

export default App;
