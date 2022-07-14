import React from "react";
import "./testimonio.css";
import vector from "../../assets/vector.png";
function Testimonio() {
  return (
    <div className="contenedor">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            

            <div className="contenido">
              <div className="info-test">
              <img src={vector} alt="..." className="imgtest"/>
              <h5>Nombre y Apellido</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                porro est quae, vitae asperiores iste? Animi similique labore
                adipisci, reprehenderit dolorum quisquam quis placeat
                reiciendis.
              </p>
            </div>
              </div>
          </div>
          <div class="carousel-item active " >

            <div className="contenido">
            <img src={vector} alt="..." className="imgtest"/>

              <h5>Nombre y Apellido</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                porro est quae, vitae asperiores iste? Animi similique labore
                adipisci, reprehenderit dolorum quisquam quis placeat
                reiciendis.
              </p>
            </div>
          </div>
          <div class="carousel-item " >

            <div className="contenido">
            <img src={vector} alt="..." className="imgtest"/>

              <h5>Nombre y Apellido</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                porro est quae, vitae asperiores iste? Animi similique labore
                adipisci, reprehenderit dolorum quisquam quis placeat
                reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonio;
