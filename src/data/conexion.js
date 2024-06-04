import mysql2 from 'mysql2'

export const connect = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'robert.29.2005',
  database: 'cadillac',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

