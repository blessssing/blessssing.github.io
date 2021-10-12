import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Label } from "semantic-ui-react";

import "./MainMenu.scss";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";

function MainMenu() {
  return (
    <>
      <Router>
        <Menu>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            About
          </Menu.Item>
          <Link to="/link">Link</Link>
          <Menu.Item as={Link} to="/test">
            test
          </Menu.Item>
        </Menu>

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
