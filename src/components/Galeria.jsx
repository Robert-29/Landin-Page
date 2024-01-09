import '../css/home.css';

export function Galeria() {
    return (
        <div>
            <section className='contenedor-galeria' >
                <h1 className='eslogan' >Tu viaje perfecto comienza aquí <br /> Cadillac - Impulsando tus Sueños, Conduciendo tu Éxito.</h1>
                <h1 className='titulo-galeria' >GALERÍA</h1>
                <div className="cards">
                    <article className='seccion1' >
                        <img src="../../public/img/img1.jpg" alt="Imagen2" />
                        <img src="../../public/img/img2.jpg" alt="Imagen1" />
                        <img src="../../public/img/img3.jpg" alt="Imagen3" />
                    </article>
                    <article className='seccion2' >
                        <img src="../../public/img/img4.jpg" alt="Imagen4" />
                        <img src="../../public/img/img5.jpg" alt="Imagen5" />
                        <img src="../../public/img/img6.jpg" alt="Imagen6" />
                    </article>
                </div>
            </section>
            <div className='interior'>
                <span>
                    <h1>INTERIRORES</h1>
                    <p>Los interiores mas detallados y lujosos para nuestros vehículos</p>
                </span>
                <img className="interior" src="../../public/img/interior.jpg" alt="Interio" />
            </div>
        </div>
    )
}

export default Galeria;