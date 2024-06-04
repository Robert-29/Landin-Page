import connection from './conexion'

function insertarDatos(datos) {
  const query = 'INSERT INTO usuarios SET ?';

  connection.query(query, datos, (error) => {
    if (error) {
      console.error('Error al insertar datos: ', error);
    } else {
      console.log('Datos insertados correctamente');
    }
  });
}

export default insertarDatos;
