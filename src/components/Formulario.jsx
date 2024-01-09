import { useState } from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';

export function Formulario() {
    const [registrado, setRegistrado] = useState(false);

    const handleRegistrarmeClick = () => {
        if (registrado) {
            setRegistrado(false);
        } else {
            setRegistrado(true);
        }
    };

    return (
        <div className="form">
            <section className='registrarme'>
                {registrado ? (
                    <div>
                        <h2>Registrarme</h2>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                        />
                        <a href="#" onClick={handleRegistrarmeClick}>
                            Iniciar sesión <box-icon type='solid' name='right-top-arrow-circle'></box-icon>
                        </a>
                    </div>
                ) : (
                    <div className='contenedor' >
                        <h2>Iniciar Sesio</h2>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                        />
                        <Link to="/Home">
                            <button className='ir' >Iniciar</button>
                        </Link>
                        <a href="#" onClick={handleRegistrarmeClick}>
                            Registrarme <box-icon type='solid' name='right-top-arrow-circle'></box-icon>
                        </a>
                    </div>
                )}
            </section>
        </div>
    );
}