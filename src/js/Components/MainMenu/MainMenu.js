import React, { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "./MainMenu.scss";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";
import Section from "@Components/Section";

const MainMenu = () => {
  const navigation = [
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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      console.log("res ", res)
    );
  }, []);

  return (
    <Section>
      <Menu items={navigation} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
    </Section>
  );
};

export default MainMenu;
