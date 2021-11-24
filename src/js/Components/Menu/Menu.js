import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ navigation }) => {
  return (
    <div className={"menu-container"}>
      <div className={"menu-wrapper"}>
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
