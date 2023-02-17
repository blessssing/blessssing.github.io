import React from "react";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "@styles/scss.scss";
import styled, { ThemeProvider } from "styled-components";
import { Global, theme } from "@styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import App from "@Components/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
