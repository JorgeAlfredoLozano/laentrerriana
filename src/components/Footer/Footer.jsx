import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <div className={styles.caca}>
        <h3 className={styles.titulo}>Desarrollador</h3>
        <div  className={styles.caquita}>
        </div>
        <p><a href="https://www.linkedin.com/in/jorgealozano/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jorge Lozano</a></p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Contacto</h3>
          <p><a className={styles.link} href="mailto:marianaclarrivey@gmail.com?subject=Contacto%20desde%20mi%20sitio%20web&amp;body=Hola,%0D%0A%0D%0AQuería contactar con ustedes para obtener más información.%0D%0A%0D%0AGracias.%0D%0A%0D%0ASaludos">marianaclarrivey@gmail.com</a></p>
          <p>(+54) 02281-15 540209</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Acerca de</h3>
            <p><a href="/about" target="_blank" rel="noopener noreferrer" className={styles.link}>¿Quienes Somos?</a></p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Asistencia</h3>
          <Link to='/preguntas'>
            <p><a className={styles.link}>¿Necesitas ayuda?</a></p>
          </Link>
        </div>
      </div>
      <footer className={styles.nav}>
        <p>© 2023 Alojamiento Temporario "La". Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;