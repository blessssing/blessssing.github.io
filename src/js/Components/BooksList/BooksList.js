import React, { useEffect, useMemo, useState } from "react";
import "./BooksList.scss";
import { useSelector } from "react-redux";
import useActions from "@hooks/useActions";
import BooksListItem from "@Components/BooksListItem";
import Loader from "@Components/Loader";
import PaginationProduct from "@Components/PaginationProduct";

const BooksList = () => {
  const { allBooks, status, error } = useSelector((state) => state.books);
  const { addAllBooks } = useActions();
  const [pagination, setPagination] = useState({
    limitProductsPerPage: 8,
    totalProducts: 0,
    totalPages: 1,
    activePage: 1,
    startProduct: 0,
    endProduct: null,
  });
  const { totalPages, activePage, startProduct, endProduct } = pagination;

  const onPageChange = (e, { activePage }) => {
    setPagination((prev) => ({ ...prev, activePage }));
  };

  useEffect(() => {
    if (!allBooks.length) {
      setTimeout(() => {
        // modify books depth 1 lvl
        addAllBooks();
      }, 500);
    }
  }, []);

  const paginationMemoized = useMemo(
    () => ({
      limitProductsPerPage: pagination.limitProductsPerPage,
      totalProducts: pagination.totalProducts,
      totalPages: pagination.totalPages,
      activePage: pagination.activePage,
      startProduct: pagination.startProduct,
      endProduct: pagination.endProduct,
    }),
    [
      pagination.limitProductsPerPage,
      pagination.totalProducts,
      pagination.totalPages,
      pagination.activePage,
      pagination.startProduct,
      pagination.endProduct,
    ]
  );
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      totalProducts: allBooks.length,
      totalPages: Math.ceil(prev.totalProducts / prev.limitProductsPerPage),
      startProduct:
        prev.limitProductsPerPage * prev.activePage - prev.limitProductsPerPage,
      endProduct: prev.limitProductsPerPage * prev.activePage,
    }));
  }, [paginationMemoized, allBooks.length]);

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
