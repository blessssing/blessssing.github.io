import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

const Error404 = () => {
  return (
    <Container textAlign="center">
      <h1>ERROR 404</h1>
      <p>
        <Link to="/">Page not Found. Return to Main Page</Link>
      </p>
    </Container>
  );
};

export default Error404;
