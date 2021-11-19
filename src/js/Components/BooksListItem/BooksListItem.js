import React from "react";

const BooksListItem = ({ article, title, description, age, author, img }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 10px 15px",
        flexBasis: "270px",
        flexShrink: 0,
        flexDirection: "column",
        textAlign: "center",
        border: "1px solid gold",
        borderRadius: "4px",
        boxShadow: "2px 5px 7px #6E4237",
        rowGap: "5px",
        fontSize: "1.1rem",
        backgroundColor: "white",
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
