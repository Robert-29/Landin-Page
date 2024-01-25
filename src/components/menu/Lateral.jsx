import { useState } from 'react';
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
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li>
          <a href="#" onClick={toggleSubMenu}>Servicios</a>
          {showSubMenu && <SubMenu />}
        </li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  );
}
