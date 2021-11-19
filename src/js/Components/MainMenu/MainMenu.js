import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Menu } from "semantic-ui-react";
import Menu from "@Components/Menu";

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

  return (
    <Section padding="0">
      <Menu items={navigation} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Section>
  );
};

export default MainMenu;
