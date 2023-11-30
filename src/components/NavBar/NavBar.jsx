import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Reservar from "../../assets/Reservar.png";

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="" />
      <span
        className={style.itemMenu}
        onClick={() => scrollToSection("inicio")}
      >
        INICIO
      </span>
      <span
        className={style.itemMenu}
        onClick={() => scrollToSection("departamentos")}
      >
        DEPARTAMENTOS
      </span>
      <Link to="/" className={style.itemMenu}>
        SERVICIOS
      </Link>
      <Link to="/" className={style.itemMenu}>
        UBICACION
      </Link>
      <div className={style.reservarContainer}>
        <div className={style.reservar}>
          <img src={Reservar} alt="Reservar" className={style.reservarImage} />
          <span className={style.tooltip}>Reservar</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
