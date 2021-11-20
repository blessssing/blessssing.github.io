import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "./styles/scss.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

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
  background-color: ${({ color, theme }) => color || theme.colors.bgBody};
}
`;

const theme = {
  colors: {
    primary: "#212121",
    secondary: "#4899AE",
    white: "white",
    bgBody: "#F7F8FA",
  },
  media: {
    phone: "(max-width: 500px)",
    tablet: "(max-width: 768px) and (min-width: 500px)",
  },
};

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
