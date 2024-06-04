import '../css/Administrador.css'
import { Lateral } from '../components/menu/Lateral';
import { useState, useEffect } from 'react';


export function VerAdministrador() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/listar-usuarios')
            .then(response => response.json())
            .then(da => setUsuarios(da))
            .catch(error => console.error('Error al obtener la lista de usuarios:', error));
    }, []);
    

    const handleDelete =  (id) => {
        console.log(id)
    };


    return (
        <section className='contenedor2' >
            <Lateral />
            <div className='ordenar' >
                <h2 className='titulo-Ladmin' >Lista de Administradores</h2>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.fecha_nacimiento}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.contrasena}</td>
                                <td><box-icon color="#1bdc08" type='solid' name='edit'></box-icon></td>
                                <td><box-icon name='trash' type='solid' color='#e90a0a' onClick={() => handleDelete(usuario.id)} ></box-icon></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}