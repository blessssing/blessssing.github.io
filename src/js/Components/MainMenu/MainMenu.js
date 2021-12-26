import React from "react";
import "./MainMenu.scss";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";
import Section from "@Components/Section";
import CartBtn from "@Components/CartBtn";
import Cart from "@Components/Cart";
import Details from "@Components/Details";

const MainMenu = () => {
  return (
    <Section>
      <CartBtn />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book/:name" element={<Details />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Section>
  );
};

export default MainMenu;
