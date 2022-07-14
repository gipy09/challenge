import React from "react";
import "./faq.css";

function Faq() {
   
  return (
    <div className="faqsection">
      <div className="container">
      <h2>FAQ</h2>

      <details data-aos="flip-down" >
      <summary >Titulo</summary>
      <div className="contenido">
        <p className="info-contenido">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad excepturi laboriosam accusamus perferendis vitae minima voluptatum accusantium. Inventore obcaecati voluptates, quo amet illum similique!</p>
      </div>
      </details>
      <details  data-aos="flip-down">
      <summary>Titulo</summary>
      <div className="contenido">
        <p className="info-contenido">Lorem ipsor sit amet, consectetur adipisicing elit. In ad excepturi laboriosam accusamus perferendis vitae minima voluptatum accusantium. Inventore obcaecati voluptates, quo amet illum similique!</p>
      </div>
      </details>
      <details  data-aos="flip-down">
      <summary>Titulo</summary>
      <div className="contenido">
        <p className="info-contenido">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad excepturi laboriosam accusamus perferendis vitae minima voluptatum accusantium. Inventore obcaecati voluptates, quo amet illum similique!</p>
      </div>
      </details>
      <details  data-aos="flip-down">
      <summary>Titulo</summary>
      <div className="contenido">
        <p className="info-contenido">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad excepturi laboriosam accusamus perferendis vitae minima voluptatum accusantium. Inventore obcaecati voluptates, quo amet illum similique!</p>
      </div>
      </details>
      </div>
    
    </div>
  );
}

export default Faq;
