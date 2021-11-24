import React from "react";
import "./BooksListItem.scss";

const BooksListItem = ({ article, title, description, age, author, img }) => {
  return (
    <div className={"book-list-item book-list-item__container"}>
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
    </div>
  );
};

export default BooksListItem;
