import React from "react";
import "./MainContent.scss";
import { Routes, Route } from "react-router-dom";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";
import Section from "@Components/Section";
import CartBtn from "@Components/CartBtn";
import Cart from "@Components/Cart";
import BookDetails from "@Components/BookDetails";
import AuthorBooks from "@Components/AuthorBooks";
import Search from "@Components/Search";
import Flex from "@Components/Flex";

const MainContent = () => {
  return (
    <Section>
      <Flex
        justify="space-between"
        alignItems="center"
        margin="0"
        padding="1.3rem 1rem 1rem"
        gap="0.5rem"
      >
        <Search />
        <CartBtn />
      </Flex>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book/:name" element={<BookDetails />} />
        <Route path="/books/:author" element={<AuthorBooks />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Section>
  );
};

export default MainContent;
