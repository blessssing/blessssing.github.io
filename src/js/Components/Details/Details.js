import React from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GoBackBtn from "@Components/GoBackBtn";
import AddToCartToggle from "@Components/AddToCartToggle";

const Details = () => {
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
            <span className="article">(Art. {article})</span>
          </div>
          <div className="info-block__author">
            <b>Author:</b> {author}
          </div>
          <div className="info-block__genre">
            <b>Genre:</b> {genre}
          </div>
          <div className="info-block__age">
            Age: <small>{age}</small>
          </div>
          <div className="info-block__description">
            Description: {description}
          </div>
          <div className="info-block__price">Price: $&nbsp;{price}</div>
          <AddToCartToggle book={book} />
        </div>
      </div>
    </article>
  );
};

export default Details;
