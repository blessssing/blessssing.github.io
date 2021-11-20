import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "./styles/scss.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: #F7F8FA;
}
`;

render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
