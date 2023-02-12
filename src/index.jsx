import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "semantic-ui-css/semantic.min.css";
import "@styles/scss.scss";
import "@styles/variables.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import styled, { ThemeProvider } from "styled-components";
import { Global, theme } from "@styles/GlobalStyle";

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
