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
  const books = useSelector((state) => state.books.books);
  console.log("books ", books);

  // modify books depth 1 lvl
  let allBooks = [...books].reduce(
    (accumulator, item) => [...accumulator, ...item.books],
    []
  );
  console.log("allBooks ", allBooks);

  useEffect(() => {
    setTimeout(() => {
      console.log("timeout 0.5 sec");

      dispatch(fetchBooks());
    }, 500);
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        flexBasis: "270px",
        flexGrow: "1",
        rowGap: "30px",
        columnGap: "30px",
        padding: "15px 0 25px",
      }}
    >
      {(allBooks.length &&
        allBooks.map((book) => (
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              flexBasis: "270px",
              columnGap: "15px",
              rowGap: "30px",
            }}
            key={book.title}
          >
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
        ))) || (
        <div
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Loading the BooksList ...
          <Loader />
        </div>
      )}
    </div>
  );
};

export default BooksList;
