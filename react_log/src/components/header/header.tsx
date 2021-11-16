import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Logo
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/admin">Администратор</NavLink>
            </li>
            <li>
              <NavLink to="/">Данные</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
