import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";

const Error404 = (props) => {
  const navigate = useNavigate();

  return (
    <Container textAlign="center">
      <h1>ERROR 404</h1>
      <p style={{ fontSize: "1.2rem" }}>
        <Link to="/">Page not Found. Return to Main Page</Link>
        &nbsp;or&nbsp;&nbsp;
        <Button
          onClick={() => {
            navigate(-1); // going to Back Page
          }}
          color="grey"
        >
          Go back
        </Button>
      </p>
    </Container>
  );
};

export default Error404;
