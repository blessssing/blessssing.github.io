import React, { useEffect } from "react";
import "./BooksList.scss";
import { useSelector } from "react-redux";
import useActions from "@hooks/useActions";
import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";
import PaginationProduct from "@Components/PaginationProduct";
import { usePagination } from "@hooks/usePagination";

const BooksList = () => {
  const { allBooks, status, error } = useSelector((state) => state.books);
  const { addAllBooks } = useActions();
  const { pagination, onPageChange, useProductPageData } = usePagination();
  const { totalPages, activePage, startProduct, endProduct } = pagination;

  useEffect(() => {
    if (!allBooks.length) {
      setTimeout(() => {
        // modify books depth 1 lvl
        addAllBooks();
      }, 500);
    }
  }, []);

  useProductPageData(allBooks.length);

  return (
    <>
      <main className={"books-list books-list__container"}>
        {(status === "resolved" &&
          allBooks.slice(startProduct, endProduct).map((book) => (
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
      {status === "resolved" && (
        <PaginationProduct
          totalPages={totalPages}
          onPageChange={onPageChange}
          defaultActivePage={activePage}
        />
      )}
    </>
  );
};

export default BooksList;
