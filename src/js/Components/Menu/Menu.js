import React from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

const Menu = ({ navigation }) => {
  return (
    <div className={"menu menu__container"}>
      <div className={"menu__wrapper"}>
        {navigation.map(({ key, name, to }) => (
          <div key={key}>
            <NavLink to={to} className={"nav-link"}>
              {name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
