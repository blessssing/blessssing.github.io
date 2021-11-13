import React from "react";

const BooksListItem = ({ article, title, description, age, author, img }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <span>{article}</span>
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div style={{ width: "200px", height: "200px" }}>
        <img
          style={{ display: "block", width: "200px", height: "200px" }}
          src={img}
          alt={img}
        />
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>{age}</span>
      </div>
      <div>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default BooksListItem;
