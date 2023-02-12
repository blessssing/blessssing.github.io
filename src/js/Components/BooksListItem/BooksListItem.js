import React from "react";
import "./BooksListItem.scss";
import { useNavigate } from "react-router-dom";
import AddToCartToggle from "@Components/AddToCartToggle";

const BooksListItem = (props) => {
  const { title, description, age, genre, author, img, price } = props;
  const navigate = useNavigate();

  return (
    <div className={"books-list-item books-list-item__container"}>
      <div className="title">
        <span>
          <b>{title}</b>
        </span>
      </div>
      <div
        className={"wrapper-image"}
        onClick={() => navigate(`/book/${title}`)}
      >
        <img src={img} alt={img} />
      </div>
      <div className="info">
        <div className="author">{author}</div>
        <div className="genre">
          <b>Жанр:&nbsp;</b>
          {genre}
        </div>
        <div className="age">
          <small>{age}</small>
        </div>
        <div className="description">{description}</div>
        <div className="price">
          <b>Цена:&nbsp;{price}&nbsp;&#8381;</b>
        </div>
        <AddToCartToggle book={props} />
      </div>
    </div>
  );
};

export default BooksListItem;
