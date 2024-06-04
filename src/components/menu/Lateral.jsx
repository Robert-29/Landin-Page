import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import '../../css/Administrador.css';

export function Lateral() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="sidebar"> 
      <h2>Administrador</h2>
      <ul>
        <li><Link to="/Administrador">Inicio</Link></li>
        <li><Link to="/RegistrarAdministrador">Registrar</Link></li>
        <li>
          <a href="#" onClick={toggleSubMenu}>Usuarios</a>
          {showSubMenu && <SubMenu />}
        </li>
        <li><Link to="/ventas">Ventas</Link></li>
      </ul>
    </div>
  );
}
