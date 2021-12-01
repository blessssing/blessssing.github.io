import React from "react";
import "./BooksListItem.scss";
import { Button } from "semantic-ui-react";

const BooksListItem = ({ article, title, description, age, author, img }) => {
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
      <Button color="green" content="Buy now" />
    </div>
  );
};

export default BooksListItem;
