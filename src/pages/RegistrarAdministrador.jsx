import '../css/Administrador.css'
import { Lateral } from '../components/menu/Lateral';
import { useState } from 'react';


export function RegistrarAdministrador() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log( { nombre, apellido, fechaNacimiento, telefono, correo, contrasena });
    };

    return (
        <section className="contenedor2">
            <Lateral />
            <div className="ordenar">
                <h1>Registrar Administrador</h1>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="columnas">
                        <div className="fila">
                            <label>
                                Nombre:
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </label>
                        </div>
                        <div className="fila">
                            <label>
                                Apellido:
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <div className="columnas">
                        <div className="fila">
                            <label>
                                Fecha de Nacimiento:
                                <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                            </label>
                        </div>
                        <div className="fila">
                            <label>
                                Número Telefónico:
                                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <div className="columnas">
                        <div className="fila">
                            <label>
                                Correo Electrónico:
                                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            </label>
                        </div>
                        <div className="fila">
                            <label>
                                Contraseña:
                                <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>

            </div>
        </section>
    );
}