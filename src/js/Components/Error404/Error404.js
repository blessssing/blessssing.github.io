import React from "react";
import { Container } from "semantic-ui-react";

function Error404() {
  return (
    <Container textAlign="center">
      <h1>ERROR 404</h1>
      <p>
        <a href="/">Page not Found. Return to Main Page</a>
      </p>
    </Container>
  );
}

export default Error404;
