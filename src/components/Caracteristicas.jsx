import { useState } from 'react';
import '../css/home.css';

export function Caracteristicas() {
  const [imagenesCategoria] = useState({
    Exterior: ['exterior1.avif', 'exterior2.avif', 'exterior3.avif'],
    Interior: ['interior1.avif', 'interior2.avif', 'interior3.avif'],
    Tecnologia: ['tecnologia1.avif', 'tecnologia2.avif', 'tecnologia3.avif'],
    Performance: ['performance1.avif', 'performance2.avif', 'performance3.avif'],
    Seguridad: ['seguridad1.avif', 'seguridad2.avif', 'seguridad3.avif'],
  });

  const [imagenesMostradas, setImagenesMostradas] = useState(imagenesCategoria.Exterior);

  const cambiarCategoria = (categoria) => {
    setImagenesMostradas(imagenesCategoria[categoria]);
  };

  return (
    <section className='caracteristicas'>
      <h1 className='carac-titulo'>Características</h1>
      <nav>
        <ul>
          <li onClick={() => cambiarCategoria('Exterior')}>Exterior</li>
          <li onClick={() => cambiarCategoria('Interior')}>Interior</li>
          <li onClick={() => cambiarCategoria('Tecnologia')}>Tecnología</li>
          <li onClick={() => cambiarCategoria('Performance')}>Performance</li>
          <li onClick={() => cambiarCategoria('Seguridad')}>Seguridad</li>
        </ul>
      </nav>
      <div>
        {imagenesMostradas.map((imagen, index) => (
          <article key={index}>
            <img src={`../../public/img/${imagen}`} alt={imagen} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, aspernatur ipsa. Distinctio hic sint sapiente vero?</p>
          </article>
        ))}
      </div>
    </section>
  );
}
