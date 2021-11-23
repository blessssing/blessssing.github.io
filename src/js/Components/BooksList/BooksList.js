import React, { useEffect, useState } from "react";
import "./BooksList.scss";
import BooksListItem from "../BooksListItem";
import { useSelector } from "react-redux";
import booksSlice from "../../redux/reducers/booksSlice";
import { useDispatch } from "react-redux";
import { fetchBooks } from "@reducers/booksSlice";
import Loader from "@Components/Loader";
import { Spring, animated } from "react-spring";

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
        flexDirection: "row",
        flexWrap: "wrap",
        flexBasis: "270px",
        flexGrow: "1",
        rowGap: "30px",
        columnGap: "30px",
        padding: "15px 0 25px",
      }}
    >
      {(books.length &&
        books.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              flexBasis: "270px",
              columnGap: "15px",
              rowGap: "30px",
            }}
            key={item.author}
          >
            {item.books.map((book) => (
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 2000 }}
                key={book.title}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <BooksListItem key={book.title} {...book} />
                  </animated.div>
                )}
              </Spring>
            ))}
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
