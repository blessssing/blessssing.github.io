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
    },
    { key: "about", name: "About", to: "/about" },
    { key: "test", name: "test", to: "/test" },
  ];

  return (
    <Section>
      <Menu navigation={navigation} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Section>
  );
};

export default MainMenu;
