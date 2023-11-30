import React from "react";
import style from "./Departamentos.module.css";

const Departamentos = () => {
  return (
    <div className={style.imageRow}>
      <div className={style.imageCard}>
        <img
          src="https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178891.jpg?w=360&t=st=1694712245~exp=1694712845~hmac=201b5022c196dc03b9c6fd9d452649995d37d6a4b6af3cda7fa1eb694da365c2"
          alt="Imagen 1"
        />
        <div className={style.overlay}>
          <div className={style.title}>DEPARTAMENTO 1</div>
          <p>DEPARTAMENTO MODERNO DE DISEÑO TIPO STUDIO. CUENTA CON UNA SEPARACIÓN VIDRIADA ENTRE EL DOMITORIO Y EL LIVING COMEDOR. LA COCINA SE ENCUENTRA INTEGRADA AL LIVING COMEDOR.</p>
          <button>Ver detalles</button>
        </div>
      </div>

      <div className={style.imageCard}>
        <img
          src="https://img.freepik.com/foto-gratis/dormitorio-moderno-brillante-limpio-estilo-escandinavo_53876-144985.jpg?w=360&t=st=1694712268~exp=1694712868~hmac=ff5ed6ea16dcd98e97b0403cafd0506db4c683375b0871818012b27cfc0b276e"
          alt="Imagen 2"
        />
        <div className={style.overlay}>
        <div className={style.title}>DEPARTAMENTO 2</div>
          <p>DEPARTAMENTO DE LUJO TIPO PENTHOUSE, CON VISTAS A LA MONTAÑA Y DIRECTAS A LA BAHÍA. CUENTA CON UN ENTREPISO INTEGRADO DONDE SE UBICA EL ÁREA DE DORMIR, Y EL VESTIDOR. EN LA PLANTA BAJA TIENE UN LIVING COMEDOR CON UNA COCINA INTEGRADA, UN TOILETTE Y BAÑO COMPLETO. DESDE EL LIVING SE ACCEDE A UN JARDÍN DE INVIERNO TECHADO Y CERRADO DONDE SE APRECIAN IMPONENTES VISTAS.</p>
          <button>Ver detalles</button>
        </div>
      </div>

      <div className={style.imageCard}>
        <img
          src="https://img.freepik.com/fotos-premium/arquitectura-interior-dormitorio-presenta-estilo-minimalista_60401-735.jpg?size=626&ext=jpg&uid=R98710812&ga=GA1.2.1647072794.1690223746&semt=sph"
          alt="Imagen 3"
        />
        <div className={style.overlay}>
        <div className={style.title}>DEPARTAMENTO 3</div>
          <p>DEPARTAMENTO MODERNO DE UN DORMITORIO CON VISTAS A LA MONTAÑA. LA COCINA SE ENCUENTRA EN UN AMBIENTE SEPARADO Y ESTA COMPLETAMENTE EQUIPADA.</p>
          <button>Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default Departamentos;
