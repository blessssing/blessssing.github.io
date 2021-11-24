import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ navigation }) => {
  return (
    <div className={"menu menu__container"}>
      <div className={"menu__wrapper"}>
        {navigation.map(({ key, name, to }) => (
          <div key={key}>
            <NavLink
              to={to}
              className={"nav-link"}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#EAEAEA" : "",
                color: isActive ? "#21ba45" : "#202020",
                padding: "0.5rem 0.8rem",
              })}
            >
              {name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
