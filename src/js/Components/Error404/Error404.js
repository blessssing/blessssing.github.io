import React from "react";
import { Container } from "semantic-ui-react";

function Error404() {
  return (
    <Container textAlign="center">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <a href="/">Home Page</a>
      </p>
    </Container>
  );
}

export default Error404;
