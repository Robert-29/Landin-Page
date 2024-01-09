import NavBar from '../components/NavBar';
import '../css/home.css';
import { Galeria } from '../components/galeria.jsx';

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
        </div>
    );
}

export default Home;