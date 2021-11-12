import React from "react";
import bannerImg from "@images/dan brown digital fortress.jpg";

const BooksListItem = ({ article, title, description, age, author, img }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <span>{article}</span>
      </div>
      <div>
        <span>{title}</span>
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
      <div style={{ width: "100px", height: "100px" }}>
        <img
          style={{ display: "block", width: "100px", height: "100px" }}
          src={img}
          alt={img}
        />
      </div>
    </div>
  );
};

export default BooksListItem;
