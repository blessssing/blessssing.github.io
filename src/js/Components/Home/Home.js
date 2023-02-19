import React, { useEffect } from "react";
import BooksList from "@Components/BooksList";
import { useSelector } from "react-redux";
import useActions from "@hooks/useActions";

const Home = () => {
  const { allBooks, status, error } = useSelector((state) => state.books);
  const { addAllBooks } = useActions();
  useEffect(() => {
    if (!allBooks.length) {
      setTimeout(() => {
        // modify books depth 1 lvl
        addAllBooks();
      }, 500);
    }
  }, []);

  return <BooksList books={allBooks} status={status} error={error} />;
};

export default Home;
