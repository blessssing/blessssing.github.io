import React from "react";
import "./BooksListItem.scss";
import { addBookToCart } from "@reducers/cartSlice";
import AddToCartToggle from "@Components/AddToCartToggle";

const BooksListItem = (props) => {
  const { title, description, age, author, img, price } = props;

  return (
    <div className={"books-list-item books-list-item__container"}>
      <div>
        <span style={{ fontSize: "1.2rem" }}>{title}</span>
      </div>
      <div className={"wrapper-image"}>
        <img src={img} alt={img} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{author}</div>
        <div style={{ fontSize: "0.9rem" }}>{age}</div>
        <div>{description}</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
          Price:&nbsp;$&nbsp;{price}
        </div>
        <AddToCartToggle book={props} />
      </div>
    </div>
  );
};

export default BooksListItem;
