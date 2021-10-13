import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "./MainMenu.scss";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";

function MainMenu() {
  const items = [
    {
      key: "home",
      active: true,
      name: "Home",
      to: "/",
      as: Link,
    },
    { key: "about", name: "About", to: "/about", as: Link },
    { key: "test", name: "test", to: "/test", as: Link },
  ];

  return (
    <>
      <Router>
        <Menu items={items} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default MainMenu;
