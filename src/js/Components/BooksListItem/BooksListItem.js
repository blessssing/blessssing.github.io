import React from "react";

const BooksListItem = ({ article, title, description, age, author, img }) => {
  return (
    <div
      style={{
        display: "flex",
        flexBasis: "270px",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div>
        <span>
          (Art. {article})&nbsp;{title}
        </span>
      </div>
      <div
        style={{
          width: "70%",
          height: "200px",
          margin: "0 auto",
        }}
      >
        <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "4px",
          }}
          src={img}
          alt={img}
        />
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
