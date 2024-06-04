import '../css/home.css';
import NavBar from '../components/menu/NavBar.jsx';
import { TodosVehiculos } from '../components/TodosVehiculos.jsx';
import { Galeria } from '../components/galeria.jsx';
import { Caracteristicas } from '../components/Caracteristicas.jsx';
import { Estilos } from '../components/estilos.jsx';
import { Footer } from '../components/Footer.jsx';
import { Datos } from '../components/Datos.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

    return (
        <section className="home-container">
            <NavBar />
            <Carousel 
                className="carrousel" 
                showThumbs={false} 
                autoPlay 
                interval={5000} 
                infiniteLoop
            >
                <div>
                    <img src="../../public/img/home-1 (1).avif" alt="Home 1" />
                </div>
                <div>
                    <img src="../../public/img/home-2.avif" alt="Home 2" />
                </div>
            </Carousel>
            <TodosVehiculos />
            <Galeria />
            <Caracteristicas />
            <Estilos />
            <Datos />
            <Footer />
        </section>
    );
}

export default Home;
