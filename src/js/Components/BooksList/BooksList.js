import React from "react";
import "./BooksList.scss";

import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";
import PaginationProduct from "@Components/PaginationProduct";
import { usePagination } from "@hooks/usePagination";

const BooksList = ({ books, status, error }) => {
  const { pagination, onPageChange, useProductPageData } = usePagination();
  const { totalPages, activePage, startProduct, endProduct } = pagination;

  useProductPageData(books.length);

  return (
    <>
      <main className={"books-list books-list__container"}>
        {(status === "resolved" &&
          books.slice(startProduct, endProduct).map((book) => (
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
