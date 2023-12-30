import { useState } from 'react';
import 'boxicons';

export function Formulario() {
    const [registrado, setRegistrado] = useState(false);

    const handleRegistrarmeClick = () => {
        setRegistrado(true);
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
                    <div>
                        <h2>Inicio de Sesión</h2>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                        />

                        <a href="#" onClick={handleRegistrarmeClick}>
                            Registrarme <box-icon type='solid' name='right-top-arrow-circle'></box-icon>
                        </a>
                    </div>
                )}
            </section>
        </div>
    );
}
