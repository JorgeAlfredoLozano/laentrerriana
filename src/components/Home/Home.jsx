import style from './Home.module.css'
import { useNavigate } from 'react-router';
import Carousel from './Carousel/Carousel';
import Bienvenida from './Bienvenida/Bienvenida'
import Departamentos from './Departamentos/Departamentos';
import Servicios from './Servicios/Servicios';
 const Home = () => {

  const navigate = useNavigate()

    return (
        <div>
          <div id="inicio">
            <Carousel/>
          </div>
          <div>
            <Bienvenida/>
          </div>
          <div id="departamentos">
          <Departamentos/>
          </div>
          <div id="servicios">
          <Servicios/>
          </div>
          
 
        </div>
    )
 }

 export default Home;