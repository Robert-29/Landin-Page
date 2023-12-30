export function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/nah/d/de/Cadillac_logo.png" alt="" />
                    <h2>Cadillac</h2>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">Inicio</a>
                        <a href="#">Garage</a>
                        <a href="#">Rentados</a>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
                <div>
                    <button>Registrar vehiculo</button>
                </div>
            </nav>
        </header>
    );
}
