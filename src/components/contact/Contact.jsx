import React from "react";
import "./contact.css";
import news from "../../assets/services/news.png";
function Contact() {
  return (
    <div className="contact">
      <div className="contenido-contact">
        <div className="img-contact">
          <div className="col">
            <img src={news} alt="" />
          </div>
        </div>
        <form action="" method="GET" className="formulario-contact">
          <input type="text" name="apellido" placeholder="Apellido"/>
          <input type="text" name="nombre" placeholder="Nombre"/>
          <input type="text" name="email" placeholder="Email"/>
          <textarea type="text" name="mensaje" placeholder="Mensaje"/>
          <button className="btn btn-danger">Enviar</button>
        </form>
      </div>
      
      
    </div>
  );
}

export default Contact;
 