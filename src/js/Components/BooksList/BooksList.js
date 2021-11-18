import React, { useEffect } from "react";
import BooksListItem from "../BooksListItem";
import { useSelector } from "react-redux";
import booksSlice from "../../redux/reducers/booksSlice";
import { useDispatch } from "react-redux";
import { fetchBooks } from "@reducers/booksSlice";

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  console.log("books ", books);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      console.log("timeout 2 sec");

      dispatch(fetchBooks());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {(books.length &&
        books.map((item) => (
          <div style={{ display: "flex", flexWrap: "wrap" }} key={item.author}>
            {item.books.map((book) => (
              <BooksListItem key={book.title} {...book} />
            ))}
          </div>
        ))) || <div>Loading the BooksList ...</div>}
    </>
  );
};

export default BooksList;
