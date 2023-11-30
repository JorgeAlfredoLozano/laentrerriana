import style from './Bienvenida.module.css'

const Bienvenida = () => {
return (
    <div className={style.container}>
    <p className={style.titulo}>Bienvenidos a</p>
    <p className={style.nombre}>La Entrerriana</p>
    <p className={style.texto1}>Estamos ubicados en zona céntrica de la ciudad de Azul y contamos con 3 departamentos de alquiler temporario para que puedas disfrutar de tu estadía, en forma cómoda y segura. Todos nuestros espacios estan equipados con TV por cable y conexión Wi-Fi, cocina con horno, microondas, heladera, alacenas y vajilla.</p>
    <p className={style.texto1}>Todos los ambientes estan calefaccionados y cuentan con ventiladores de techo en las habitaciones.</p>

    </div>
)
}
export default Bienvenida;
