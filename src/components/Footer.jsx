import '../css/home.css'

export function Footer(){
    return(
        <footer>
            <div className="info">
                <span className='seguir' >
                    <article>
                        <h3>Siguenos</h3>
                        <div className='iconos-redes' >
                            <a className='icono' href="#"><box-icon type='logo' color='black' name='facebook-circle' size='40px' ></box-icon></a>
                            <a className='icono' href="#"><box-icon name='instagram-alt' type='logo' color='black' size='40px'></box-icon></a>
                            <a className='icono' href="#"><box-icon name='twitter' type='logo' color='black' size='40px' ></box-icon></a>
                            <a className='icono' href="#"><box-icon name='github' type='logo' color='black' size='40px' ></box-icon></a>
                        </div>
                    </article>
                    <a className='boton-boletin' href='https://www.cadillac.com.mx/contactanos'>Suscribete al boletín</a>
                </span>
                <div className="informacion-extra">
                    <article>
                        <h3>MUNDO CADILLAC</h3>
                        <p>SUVs</p>
                        <p>ELÉCTRICOS</p>
                        <p>INNOVACIÓN</p>
                        <p>PERFORMANCE</p>
                        <p>DETALLES</p>
                    </article>
                    <article>
                        <h3>AYUDA</h3>
                        <p>CONTACTO</p>
                        <p>MAPA DEL SITIO</p>
                        <p>CADILLAC FINANCIAL</p>
                        <p>SOLICITA UNA COTIZACIÓN</p>
                        <p>SOLICITA UNA PRUEBS DE MANEJO</p>
                    </article>
                    <article>
                        <h3>PROPIETARIOS</h3>
                        <p>CENTRO DE PROPIETARIOS</p>
                        <p>LLAMADO A REVIDSIÓN</p>
                        <p>BENEFICIOS</p>
                    </article>
                    <article>
                        <h3>DESCARGA</h3>
                        <p>MY CADILLAC APP</p>
                    </article>
                </div>
                <p className='final' >GENERAL MOTORS DE MÉXICO, S. DE R.L. DE C.V. con domicilio en Avenida Ejército Nacional 843-B, Col. Granada, Delegación Miguel Hidalgo. C.P. 11520, Ciudad de México. El precio dependerá de cada modelo. Consulte los Legales aplicables a la información publicada en este Sitio.</p>
            </div>
            <span className='mis-redes' >
            <box-icon name='instagram' type='logo' ></box-icon>
            </span>
        </footer>
    )
}