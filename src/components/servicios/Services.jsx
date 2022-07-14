import React from "react";
import './services.css'
import news from "../../assets/services/news.png";
import bienestar from "../../assets/services/bienestar.png";
import trabajo from "../../assets/services/trabajo.png";

function Services() {
  return (
    <div className="servi">
      <div className="contenedor-card">
      <div className="cards" data-aos="fade-up">
        <div className="header-card">
          <img src={news} className="card-img-top" alt="..." />
        </div>
        <div className="name-card">Servicios</div>
        <div className="info-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          beatae blanditiis, cupiditate quas dignissimos amet?
        </div>
      </div>
      <div className="cards"data-aos="fade-up" >
        <div className="header-card">
          <img src={bienestar} className="card-img-top" alt="..." />
        </div>
        <div className="name-card">Servicios</div>
        <div className="info-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          beatae blanditiis, cupiditate quas dignissimos amet?
        </div>
      </div>
      <div className="cards" data-aos="fade-up">
        <div className="header-card">
          <img src={trabajo} className="card-img-top" alt="..." />
        </div>
        <div className="name-card">Servicios</div>
        <div className="info-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          beatae blanditiis, cupiditate quas dignissimos amet?
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;
