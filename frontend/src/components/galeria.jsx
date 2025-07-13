import React from 'react';
import '../styles/galeria.css';

export default function Galeria() {
  const toggleMenu = () => {
    const nav = document.querySelector('.Navbar ul');
    nav.classList.toggle('show');
  };

  return (
    <>
      {/* Header */}
      <header className="head">
        <div className="logo">
          <a href="/"><img src="/img/WhatsApp%20Image%202025-04-09%20at%204.21.12%20PM.jpeg" alt="Logo" /></a>
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

      {/* Galería */}
      <section className="content galeria">
        <div className="grid-layout">
          {[1, 2, 3, 4, 5, 6, 11, 8, 9, 10].map((num) => (
            <React.Fragment key={num}>
              <div className="caja">
                <img src={`/img/Auto${num}.jpg`} alt={`Auto ${num}`} />
                <a href={`#modal${num}`} className="Boton">
                  <i className="bi bi-search" style={{ marginRight: '8px' }}></i>
                  Ver más
                </a>
              </div>

              <div className="modal" id={`modal${num}`}>
                <div className="modal-content">
                  <div className="close-btn"><a href="#">X</a></div>
                  <div className="modal-img">
                    <img src={`/img/Auto${num}.jpg`} alt={`Auto ${num} ampliado`} />
                  </div>
                  <h3>Auto {num}</h3>
                  <p>Descripción del auto {num}, esto es una tarjeta.</p>
                  <a href="#" className="btn">Más información.</a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Autos Al Piso. Todos los derechos reservados.</p>
        <div className="redes">
          <a href="#"><img src="/img/github-icono.jpg" alt="GitHub" width="24" /></a>
          <a href="#"><img src="/img/linkedin-icono.jpg" alt="LinkedIn" width="24" /></a>
        </div>
      </footer>
    </>
  );
}
