import React from "react";
import style from "./Servicios.module.css";

const serviciosData = [
  {
    title: "SERVICIOS A",
    items: [
      "Aire Acondicionado y Calefacción",
      "Ascensor",
      "Ropa de Blanco",
      // ...otros servicios de A
    ],
  },
  {
    title: "SERVICIOS B",
    items: [
      "Balcón",
      "Terraza con vistas a la ciudad",
      "Asistencia por WhatsApp",
      // ...otros servicios de B
    ],
  },
  {
    title: "SERVICIOS C",
    items: [
      "Ducha",
      "Secador de Pelo",
      "Papel Higiénico",
      // ...otros servicios de C
    ],
  },
  {
    title: "SERVICIOS D",
    items: [
      "Bacha",
      "Toallas",
      "Toallones",
      // ...otros servicios de D
    ],
  },
];

const Servicios = () => {
  return (
    <div>
      {serviciosData.map((grupo, index) => (
        <div key={index}>
          <h2>{grupo.title}</h2>
          <div className={style.container}>
            {grupo.items.map((servicio, servicioIndex) => (
              <div key={servicioIndex} className={style.servicio}>
                {servicio}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
