import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ navigation }) => {
  return (
    <div
      style={{
        backgroundColor: "#AFD98F",
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
        {navigation.map(({ key, active, name, to }) => (
          <div key={key}>
            <Link
              active={active}
              to={to}
              style={{
                color: "white",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
              className={"nav-link"}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
