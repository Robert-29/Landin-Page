import '../css/home.css';

export function TodosVehiculos () {
    return (
        <section className='todosVehiculos' >
            <h1>TODOS LOS VEHÍCULOS</h1>
            <div className="vehiculos">
                <article>
                    <img src="../../public/img/T-1.png" alt="" />
                    <h3>ESCALADE-V</h3>
                    <p>DESDE: $3,336,900</p>
                    <button>VER MODELO</button>
                </article>
                <article>
                    <img src="../../public/img/T-2.png" alt="" />
                    <h3>ESCALADE</h3>
                    <p>DESDE: $2,631,400</p>
                    <button>VER MODELO</button>
                </article>
                <article>
                    <img src="../../public/img/T-3.png" alt="" />
                    <h3>LYRIQ</h3>
                    <p>DESDE: $1,764,400</p>
                    <button>VER MODELO</button>
                </article>
                <article>
                    <img src="../../public/img/T-4.png" alt="" />
                    <h3>XT5</h3>
                    <p>DESDE: $1,135,900</p>
                    <button>VER MODELO</button>
                </article>
                <article>
                    <img src="../../public/img/T-5.png" alt="" />
                    <h3>XT4</h3>
                    <p>DESDE: $1,105,400</p>
                    <button>VER MODELO</button>
                </article>
            </div>
        </section>
    )
}

export default TodosVehiculos;