import React from "react";
import "./footer.css";
import White from "../../assets/White.png";
import Separator from "../../assets/Separator.png";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
      <div className="contenidofooter">
        <div className="imgfooter">
          <img src={White} alt="" />
        </div>
        <div className="infofooter">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero
          eaque cum magnam, totam molestiae.
        </p>
        </div>
      </div>
      </div>
  
     
        <ul className="pagelist">
        <li className="pageitem"><a href="">Potitica de Cookies</a> </li>
        <li className="pageitem"><a href="">Potitica de Privacidad</a> </li>
        <li className="pageitem"><a href="">Terminos y Condiciones</a> </li>
        <li className="pageitem"><a href="">Clausula Informativa</a> </li>
        </ul>
    
    </div>
  );
}

export default Footer;
