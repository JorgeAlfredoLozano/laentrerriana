import React, { useState, useEffect } from "react";
import style from "./Carousel.module.css";

const images = [
  "https://img.freepik.com/foto-gratis/elegante-sala-estar-escandinava-muebles-sofa-menta-diseno-que-burlan-plantas-mapa-cartel-eleg_1258-152155.jpg?w=826&t=st=1694702856~exp=1694703456~hmac=aa67b573d393e8c5b5b32bcabd044bea127f1ede013e0480214e527e8fbbd1e0",
  "https://img.freepik.com/foto-gratis/3d-renderizado-loft-sala-estar-escandinava-mesa-trabajo-estanteria_105762-2162.jpg?w=740&t=st=1694702883~exp=1694703483~hmac=6a46593ccd04e089bc9106dc77912db052e816a383bde2c47da1486a527dd838",
  "https://img.freepik.com/foto-gratis/apartamento-moderno-muebles-comodos-creatividad-generada-ia_188544-16968.jpg?w=740&t=st=1694702900~exp=1694703500~hmac=627a33b2ab82fc7afedb1aa9b4b940198135e31f2b74eac72a8e152a39659c53",
  // Agrega aquí las rutas de tus imágenes
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${style.slide} ${
            index === currentIndex ? style.active : ""
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
