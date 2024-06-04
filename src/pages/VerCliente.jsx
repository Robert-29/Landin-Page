import { Lateral } from '../components/menu/Lateral';
import '../css/Administrador.css'


export function VerCliente() {
    return (
        <section className='contenedor2' >
            <Lateral />
            <div className='ordenar' >
                <h2 className='titulo-Ladmin' >Lista de Clientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>contraseña</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.fecha_nacimiento}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.contrasena}</td>
                                <td><box-icon name='trash' type='solid' color='#e90a0a'></box-icon></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}