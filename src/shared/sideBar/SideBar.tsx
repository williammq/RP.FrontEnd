import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { swaggerUrl } from "../../config/endpointsConfig";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" exact className="text-dark round py-3 w-100 d-inline-block px-4" activeClassName="active">
            <FaIcons.FaHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <hr className="solid"/>
        <li>
          <NavLink to="/product" exact className="text-dark round py-3 w-100 d-inline-block px-4" activeClassName="active">
            <FaIcons.FaLock className="me-2" />
            Productos
          </NavLink>
        </li>
        <hr className="solid"/>
        <li>
          <a href={swaggerUrl} target="_blank" className="text-dark round py-3 w-100 d-inline-block px-4" rel="noreferrer">
            <FaIcons.FaPlug className="me-2" />
            Api Service
          </a>
        </li>
        <hr className="solid"/>
        <li>
          <a href="https://github.com/williammq" target="_blank" className="text-dark round py-3 w-100 d-inline-block px-4" rel="noreferrer">
            <FaIcons.FaGithub className="me-2" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/william-felipe-martel-quiroz-2765b5202/" target="_blank" className="text-dark round py-3 w-100 d-inline-block px-4" rel="noreferrer">
            <FaIcons.FaLinkedin className="me-2" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
