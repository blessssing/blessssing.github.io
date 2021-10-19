import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
