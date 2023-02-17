import React from "react";
import { Link } from "react-router-dom";

import GoBackBtn from "@Components/GoBackBtn";

const Error404 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ERROR 404</h1>
      <div style={{ fontSize: "1.2rem" }}>
        <Link to="/">Page not Found. Return to Main Page</Link>
        <div>or</div>
        <GoBackBtn />
      </div>
    </div>
  );
};

export default Error404;
