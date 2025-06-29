// src/pages/Gallery.jsx
import React from "react";
import "../styles/global.css";

const autos = [
  { id: 1, src: "/img/Auto1.jpg", titulo: "Auto 1", descripcion: "Descripcion del auto 1" },
  { id: 2, src: "/img/Auto2.jpg", titulo: "Auto 2", descripcion: "Descripcion del auto 2" },
  { id: 3, src: "/img/Auto3.jpg", titulo: "Auto 3", descripcion: "Descripcion del auto 3" },
  { id: 4, src: "/img/Auto4.jpg", titulo: "Auto 4", descripcion: "Descripcion del auto 4" },
  { id: 5, src: "/img/Auto5.jpg", titulo: "Auto 5", descripcion: "Descripcion del auto 5" },
  { id: 6, src: "/img/Auto6.jpg", titulo: "Auto 6", descripcion: "Descripcion del auto 6" },
  { id: 7, src: "/img/Auto11.jpg", titulo: "Auto 7", descripcion: "Descripcion del auto 7" },
  { id: 8, src: "/img/Auto8.jpg", titulo: "Auto 8", descripcion: "Descripcion del auto 8" },
  { id: 9, src: "/img/Auto9.jpg", titulo: "Auto 9", descripcion: "Descripcion del auto 9" },
  { id: 10, src: "/img/Auto10.jpg", titulo: "Auto 10", descripcion: "Descripcion del auto 10" }
];

function Gallery() {
  return (
    <section className="content galeria">
      <div className="grid-layout">
        {autos.map(auto => (
          <div key={auto.id} className="caja">
            <img src={auto.src} alt={auto.titulo} />
            <a href={`#modal${auto.id}`} className="Boton">Ver más</a>

            <div className="modal" id={`modal${auto.id}`}>
              <div className="modal-content">
                <div className="close-btn"><a href="#">X</a></div>
                <div className="modal-img">
                  <img src={auto.src} alt={`${auto.titulo} ampliado`} />
                </div>
                <h3>{auto.titulo}</h3>
                <p>{auto.descripcion}</p>
                <a href="#" className="btn">Mas infracion.</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
