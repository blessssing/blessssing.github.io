import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "semantic-ui-css/semantic.min.css";
import "@styles/scss.scss";
import "@styles/variables.scss";
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
    goldenrod: "goldenrod",
    gold: "gold",
  },
  media: {
    phone: "(max-width: 500px)",
    tablet: "(max-width: 991px)",
  },

  // $screen-sm: 576px;
  // $screen-md: 768px;
  // $screen-lg: 992px;
  // $screen-xl: 1200px;
  // === === ===
  // $screen-xs-max: 575px;
  // $screen-sm-max: 767px;
  // $screen-md-max: 991px;
  // $screen-lg-max: 1199px;
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
