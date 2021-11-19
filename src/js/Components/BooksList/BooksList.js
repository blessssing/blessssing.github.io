import React, { useEffect } from "react";
import BooksListItem from "../BooksListItem";
import { useSelector } from "react-redux";
import booksSlice from "../../redux/reducers/booksSlice";
import { useDispatch } from "react-redux";
import { fetchBooks } from "@reducers/booksSlice";
import Loader from "@Components/Loader";

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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            key={item.author}
          >
            {item.books.map((book) => (
              <BooksListItem key={book.title} {...book} />
            ))}
          </div>
        ))) || (
        <div>
          Loading the BooksList ...
          <Loader />
        </div>
      )}
    </>
  );
};

export default BooksList;
