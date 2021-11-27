import React, { useEffect } from "react";
import "./BooksList.scss";
import { useDispatch, useSelector } from "react-redux";
import { Spring, animated } from "react-spring";
import { fetchBooks } from "@reducers/booksSlice";
import booksSlice from "@reducers/booksSlice";
import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);
  console.log("books ", books);

  useEffect(() => {
    setTimeout(() => {
      console.log("timeout 0.5 sec");

      dispatch(fetchBooks());
    }, 500);
  }, [dispatch]);

  // modify books depth 1 lvl
  const allBooks = [...books].reduce(
    (accumulator, item) => [...accumulator, ...item.books],
    []
  );
  console.log("allBooks ", allBooks);

  return (
    <main className={"books-list books-list__container"}>
      {(status === "resolved" &&
        allBooks.map((book) => (
          <div className={"wrapper-book"} key={book.title}>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ duration: 1000 }}
              key={book.title}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <BooksListItem key={book.title} {...book} />
                </animated.div>
              )}
            </Spring>
          </div>
        ))) ||
        (error && <h2>Error, can not resolved data: {error}</h2>) || (
          <div className={"wrapper-loader"}>
            Loading the BooksList ...
            <Loader />
          </div>
        )}
    </main>
  );
};

export default BooksList;
