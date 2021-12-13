import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ERROR 404</h1>
      <div style={{ fontSize: "1.2rem" }}>
        <Link to="/">Page not Found. Return to Main Page</Link>
        <div>or</div>
        <div>
          <Icon
            onClick={() => {
              navigate(-1); // going to Back Page
            }}
            name="long arrow alternate left"
            color="brown"
            size="big"
            link
          />
          <span>Go back</span>
        </div>
      </div>
    </div>
  );
};

export default Error404;
