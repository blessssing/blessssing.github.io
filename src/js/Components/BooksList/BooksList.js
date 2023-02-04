import React, { useEffect } from "react";
import "./BooksList.scss";
import { useDispatch, useSelector } from "react-redux";
import { addAllBooks } from "@reducers/booksSlice";
import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";

const BooksList = () => {
  const dispatch = useDispatch();
  const { allBooks, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    if (!allBooks.length) {
      setTimeout(() => {
        // modify books depth 1 lvl
        dispatch(addAllBooks());
      }, 500);
    }
  }, [dispatch]);

  return (
    <main className={"books-list books-list__container"}>
      {(status === "resolved" &&
        allBooks.map((book) => (
          <div className={"wrapper-book"} key={book.title}>
            <BooksListItem {...book} />
          </div>
        ))) ||
        (error && <h2>Error, can not resolved data: {error}</h2>) || (
          <div className={"wrapper-loader"}>
            Загрузка книг ...
            <Loader />
          </div>
        )}
    </main>
  );
};

export default BooksList;
