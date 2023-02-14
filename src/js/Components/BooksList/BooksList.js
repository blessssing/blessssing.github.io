import React, { useEffect } from "react";
import "./BooksList.scss";
import { useSelector } from "react-redux";
import useActions from "@hooks/useActions";
import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";
import PaginationProduct from "@Components/PaginationProduct";

const BooksList = () => {
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

  return (
    <>
      <main className={"books-list books-list__container"}>
        {(status === "resolved" &&
          allBooks.map((book) => (
            <div className={"wrapper-book"} key={book.id}>
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
      {status === "resolved" && <PaginationProduct />}
    </>
  );
};

export default BooksList;
