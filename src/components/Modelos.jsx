import '../css/home.css'

export function Modelos() {
    return (
        <section className='modelos'>
            <h1 className='titulo-modelo' >Modelos</h1>
            <div className='fila'>
                <article className='cuadrante1' >
                    <img className='chicas' src="../../public/img/modelo1.png" alt="" />
                    <h2>Cadillac XT4</h2>
                </article>
                <article className='cuadrante2' >
                    <img className='chicas' src="../../public/img/modelo2.png" alt="" />
                    <h2>cadillac XT5</h2>
                </article>
            </div>
            <div className='fila'>
                <article className='cuadrante3' >
                    <img className='grandes' src="../../public/img/modelo3.avif" alt="" />
                    <h2>Cadillac scalade V</h2>
                </article>
                <article className='cuadrante4' >
                    <img className='grandes' src="../../public/img/modelo4.png" alt="" />
                    <h2>Cadillac scalade -V</h2>
                </article>
            </div>
        </section>
    )
}