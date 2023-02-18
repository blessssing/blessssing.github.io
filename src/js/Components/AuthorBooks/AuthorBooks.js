import React from "react";
import "./AuthorBooks.scss";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const AuthorBooks = () => {
  const { books, status, error } = useSelector((state) => state.books);
  const params = useParams();
  console.log("books ", books);
  console.log("params ", params);

  return <div>AuthorBooks</div>;
};

export default AuthorBooks;
