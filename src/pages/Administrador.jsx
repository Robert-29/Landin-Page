import '../css/Administrador.css'
import { Lateral } from "../components/menu/Lateral";

export function Administrador() {
    return (
        <section className='contenedor2' >
            <Lateral />
            <div className="administrador">
                <h1>Administrador</h1>
            </div>
        </section>
    );
}