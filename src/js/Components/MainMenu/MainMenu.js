import React from "react";
import "./MainMenu.scss";
import { Routes, Route } from "react-router-dom";
import Menu from "@Components/Menu";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";
import Section from "@Components/Section";
import Cart from "@Components/Cart";

const MainMenu = () => {
  const navigation = [
    { key: "home", name: "Home", to: "/" },
    { key: "about", name: "About", to: "/about" },
    { key: "test", name: "test", to: "/test" },
  ];

  return (
    <Section>
      <Menu navigation={navigation} />
      <Cart />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Section>
  );
};

export default MainMenu;
