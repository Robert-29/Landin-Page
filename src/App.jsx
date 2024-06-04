import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { Administrador } from "./pages/Administrador";
import { RegistrarAdministrador } from "./pages/RegistrarAdministrador";
import { VerAdministrador } from './pages/VerAdministrador';
import { VerCliente } from './pages/VerCliente';



export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Administrador" element={<Administrador />} />
                <Route path="/registraradministrador" element={<RegistrarAdministrador />} />
                <Route path="/veradministrador" element={<VerAdministrador />} />
                <Route path="/vercliente" element={<VerCliente />} />
            </Routes>
        </Router>
    )
}