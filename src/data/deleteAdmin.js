import { createConnection } from './conexion';
import express from 'express';
const app = express();

const PORT = 3001;

app.use(express.json());

app.post('/api/borrar-usuario', async (req, res) => {
  const { idUsuario } = req.body;

  try {
    const connection = await createConnection();

    // Realiza la lógica para eliminar el usuario de la base de datos
    const [result] = await connection.execute('DELETE FROM usuarios WHERE id = ?', [idUsuario]);

    connection.end();

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {         
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
