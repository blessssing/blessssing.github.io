import React from "react";
import "./BooksListItem.scss";
import { useDispatch } from "react-redux";

import { Button } from "semantic-ui-react";
import { addBookToCart } from "@reducers/cartSlice";

const BooksListItem = (props) => {
  const dispatch = useDispatch();
  const { article, title, description, age, author, img, price } = props;

  return (
    <div className={"books-list-item books-list-item__container"}>
      <div>
        <span>
          (Art. {article})&nbsp;{title}
        </span>
      </div>
      <div className={"wrapper-image"}>
        <img src={img} alt={img} />
      </div>
      <div>
        <span>{author}</span>
      </div>
      <div>
        <span>{age}</span>
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <Button
          onClick={() => dispatch(addBookToCart({ ...props }))}
          color="green"
          content="Add to cart"
        />
        <span>$&nbsp;{price}</span>
      </div>
    </div>
  );
};

export default BooksListItem;
