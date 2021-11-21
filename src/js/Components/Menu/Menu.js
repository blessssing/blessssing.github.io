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
        {navigation.map(({ key, name, to }) => (
          <div key={key}>
            <Link to={to} className={"nav-link active"}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
