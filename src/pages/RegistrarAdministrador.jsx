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

    const handleSubmit = async () => {

        try {
            const response = await fetch('http://localhost:3001/api/insertar-usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, apellido, fecha_nacimiento: fechaNacimiento, telefono, correo, contrasena }),
            });

            if (response.ok) {
                console.log('Usuario insertado correctamente');
                // Puedes realizar acciones adicionales después de la inserción
            } else {
                console.error('Error al insertar el usuario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
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