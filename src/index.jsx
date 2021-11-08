import React from "react";
import { render } from "react-dom";
import App from "@Components/App";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
