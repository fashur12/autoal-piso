import React from "react";
import "../styles/global.css";

function Home() {
  return (
    <>
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
        <h2 className="title">¿Quiénes somos?</h2>
        <p>
          En <strong>Autos Al Piso</strong>, si buscan naves que rocen el asfalto y tengan un look que rompe cuellos,
          llegaron al lugar indicado. En nuestra web encontrarán una selección de autos al piso que son verdaderas obras de arte sobre ruedas.
          Cada uno de nuestros fierros ha sido elegido y cuidado con pasión,
          diseños que te dejarán sin palabras y esa onda única que solo los autos al piso tienen.
          ¡Eligan uno y comprenos, NECESITAN un auto al piso y nosotros queremos tu plata!
        </p>
        <div className="botones">
          <a href="#">Conocer mas</a>
          <a href="/galeria">Explorar vehiculo</a>
        </div>
      </main>
    </>
  );
}

export default Home;
