import '../../css/Administrador.css'
import { Link } from 'react-router-dom';


const SubMenu = () => {
  return (
    <ul className="submenu">
      <li><Link to="/VerAdministrador">Administradores</Link></li>
      <li><Link to="/VerCliente">Clientes</Link></li>
    </ul>
  );
}

export default SubMenu;
