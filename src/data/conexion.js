import mysql from 'mysql2';

// Configuración de la conexión a la base de datos
const configuracion = {
  host: 'localhost',
  user: 'root',
  password: 'robert.29.2005',
  database: 'cadillac',
};

const conexion = mysql.createConnection(configuracion);

// Datos a insertar
const datosAInsertar = {
  nombre: 'Denisse',
  apellido: 'Bautista Gonzalez',
  fecha_nacimiento: '2005-08-10',
  telefono: '555-1234',
  correo: 'Denisse@example.com',
  contrasena: 'contraseña100',
};

// Consulta de inserción
const consulta = 'INSERT INTO usuarios SET ?';

// Ejecutar la consulta
conexion.query(consulta, datosAInsertar, (error, resultados) => {
  if (error) {
    console.error('Error al insertar datos:', error);
  } else {
    console.log('Datos insertados correctamente:', resultados);
  }

  // Cierra la conexión cuando hayas terminado de usarla
  conexion.end();
});