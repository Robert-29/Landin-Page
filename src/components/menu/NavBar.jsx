import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/nah/d/de/Cadillac_logo.png" alt="" />
                    <ul className="nav-links">
                        <li>
                            <a href="#">Inicio</a>
                            <a href="#">Galería</a>
                            <a href="#">Modelos</a>
                            <a href="#">Síguenos</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/Administrador" >
                        <button className="boton-comprar" >COMPRAR</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;