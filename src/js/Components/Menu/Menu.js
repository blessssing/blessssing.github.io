import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ navigation }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #C5C5C6",
        borderRadius: "4px",
        boxShadow: "0 2px 4px #BAC65F",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.2rem",
          padding: "0.8rem",
        }}
      >
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
