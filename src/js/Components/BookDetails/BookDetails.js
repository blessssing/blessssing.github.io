import React from "react";
import "./BookDetails.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GoBackBtn from "@Components/GoBackBtn";
import AddToCartToggle from "@Components/AddToCartToggle";
import CustomNavLink from "@Components/CustomNavLink";

const BookDetails = () => {
  const { name } = useParams();
  const allBooks = useSelector((state) => state.books.allBooks);
  const book = allBooks.find((book) => book.title === name);
  const { age, article, author, genre, description, img, price, title } = book;

  return (
    <article className="book-details-container">
      <GoBackBtn />
      <div className="book-details">
        <div className="book-details__img-wrapper">
          <img src={img} alt={img} />
        </div>

        <div className="info-block">
          <div className="info-block__title">
            <span className="title">{title}</span>&nbsp;&nbsp;&nbsp;
            <span className="article">(Арт. {article})</span>
          </div>
          <CustomNavLink
            to={`/books/${author}`}
            className="info-block__author"
            // onClick={() => navigate(`/books/${author}`)}
          >
            <b>Автор:</b>&nbsp;{author}
          </CustomNavLink>
          <div className="info-block__genre">
            <b>Жанр:</b>&nbsp;{genre}
          </div>
          <div className="info-block__age">
            Возрастная категория: &nbsp;<small>{age}</small>
          </div>
          <div className="info-block__description">
            <b>Описание:</b>&nbsp;{description}
          </div>
          <div className="info-block__price">
            <div>Цена:&nbsp;{price}&nbsp;&#8381;</div>
            <AddToCartToggle book={book} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookDetails;
