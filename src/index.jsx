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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  // background-color: #F8F8F8;
  // background-color: orange;
  // background-color: #FFFFFF;
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
