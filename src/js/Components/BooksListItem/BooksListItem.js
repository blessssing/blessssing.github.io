import React from "react";
import "./BooksListItem.scss";
import { addBookToCart } from "@reducers/cartSlice";
import AddToCartToggle from "@Components/AddToCartToggle";

const BooksListItem = (props) => {
  const { title, description, age, author, img, price } = props;

  return (
    <div className={"books-list-item books-list-item__container"}>
      <div className="title">
        <span>
          <b>{title}</b>
        </span>
      </div>
      <div className={"wrapper-image"}>
        <img src={img} alt={img} />
      </div>
      <div className="info">
        <div className="author">{author}</div>
        <div>
          <small>{age}</small>
        </div>
        <div>{description}</div>
        <div className="price">
          <b>Price:&nbsp;$&nbsp;{price}</b>
        </div>
        <AddToCartToggle book={props} />
      </div>
    </div>
  );
};

export default BooksListItem;
