import connection from './conexion'

function seleccionarDatos(callback) {
  const query = 'SELECT * FROM usuarios';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al seleccionar datos: ', error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

export default seleccionarDatos;
