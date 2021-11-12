import React from "react";
import BooksListItem from "../BooksListItem";
import { useSelector } from "react-redux";
import booksSlice from "../../redux/reducers/booksSlice";

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  console.log("books ", books);

  return (
    <>
      <h2>BooksList</h2>
      {books.map((item) => (
        <div style={{ display: "flex" }} key={item.author}>
          {item.books.map((book) => (
            <BooksListItem key={book.title} {...book} />
          ))}
        </div>
      ))}
    </>
  );
};

export default BooksList;
