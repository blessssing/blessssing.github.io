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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        rowGap: "30px",
        padding: "15px 0 25px",
      }}
    >
      {(books.length &&
        books.map((item) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: "15px",
              rowGap: "30px",
            }}
            key={item.author}
          >
            {item.books.map((book) => (
              <BooksListItem key={book.title} {...book} />
            ))}
          </div>
        ))) || (
        <div
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          Loading the BooksList ...
          <Loader />
        </div>
      )}
    </div>
  );
};

export default BooksList;
