import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { RegistrarAdministrador } from './pages/RegistrarAdministrador';
// import Home from './pages/Home';
// import { Administrador } from './pages/Administrador';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/home" element={<RegistrarAdministrador />} />
            </Routes>
        </Router>
    )
}