import React from "react";
import "./AuthorBooks.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksList from "@Components/BooksList";

const AuthorBooks = () => {
  const { books, status, error } = useSelector((state) => state.books);
  const { author } = useParams();
  console.log("books ", books);
  console.log("author ", author);
  const authorData = books.find((item) => item.author === author);
  console.log("authorData ", authorData);

  return <BooksList books={authorData.books} status={status} error={error} />;
};

export default AuthorBooks;
