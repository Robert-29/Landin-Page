import '../css/home.css'

export function Footer(){
    return(
        <footer>
            <div className="info">
                <span className='seguir' >
                    <p>Sigueme</p>
                    <section>
                        <a className='icono' href="#"><box-icon type='logo' color='black' name='facebook-circle'></box-icon></a>
                        <a className='icono' href="#"><box-icon name='instagram-alt' type='logo' color='black' ></box-icon></a>
                        <a className='icono' href="#"><box-icon name='twitter' type='logo' color='black' ></box-icon></a>
                        <a className='icono' href="#"><box-icon name='github' type='logo' color='black' ></box-icon></a>
                    </section>
                </span>
                <p className='final' >GENERAL MOTORS DE MÉXICO, S. DE R.L. DE C.V. con domicilio en Avenida Ejército Nacional 843-B, Col. Granada, Delegación Miguel Hidalgo. C.P. 11520, Ciudad de México. El precio dependerá de cada modelo. Consulte los Legales aplicables a la información publicada en este Sitio.</p>
            </div>
        </footer>
    )
}