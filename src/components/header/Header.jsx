import React from "react";
import "./header.css";
import menuico from "../../assets/header/menuico.png";
import logo from "../../assets/header/logo.png";
import lupa from "../../assets/header/lupa.png";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="dropdown menu">
          <img
            src={menuico}
            alt=""
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          />

          <ul
            className="dropdown-menu drop-menu"
            aria-labelledby="dropdownMenuButton1"
          >
            <h5 className="title-item" href="#">
              Embarazo
            </h5>
            <ul>
              <li>
                <a href="">Item</a>
              </li>
              <li>
                <a href="">Item</a>
              </li>
              <li>
                <a href="">Item</a>
              </li>
            </ul>

            <h5 className="title-item" href="#">
              Educacion
            </h5>
            <ul>
              <li>
                <a href="">Item</a>
              </li>
              <li>
                <a href="">Item</a>
              </li>
              <li>
                <a href="">Item</a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <div className="btn-group dropstart">
            <img src={lupa}
              type="button"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul className="dropdown-menu menu-search">
              <input type="text" placeholder="Buscar" className="buscarinput"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
