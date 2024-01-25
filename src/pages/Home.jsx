import '../css/home.css';
import NavBar from '../components/menu/NavBar.jsx';
import { Galeria } from '../components/galeria.jsx';
import { Caracteristicas } from '../components/Caracteristicas.jsx';
import { Estilos } from '../components/estilos.jsx';
import { Modelos } from '../components/Modelos.jsx';
import { Footer } from '../components/Footer.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <section className="fondo-imagen-container">
                <img className="fondo-imagen" src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/2024/crossover-suvs/escalade/01-images/my24-escalade-mov-design-intro-l-v3.jpg?imwidth=960" alt="" />
                <div className="contenido-superpuesto">
                    <NavBar />
                </div>
            </section>
            <Galeria/>
            <Caracteristicas/>
            <Estilos/>
            <Modelos/>
            <Footer/>
        </div>
    );
}

export default Home;