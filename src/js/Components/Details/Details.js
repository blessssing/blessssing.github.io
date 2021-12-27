import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GoBackBtn from "@Components/GoBackBtn";

const Details = () => {
  const { name } = useParams();
  const allBooks = useSelector((state) => state.books.allBooks);
  const { age, article, author, description, img, price, title } =
    allBooks.find((book) => book.title === name);

  return (
    <div>
      <GoBackBtn />
      <div>
        <div>{title}</div>
        <div>{age}</div>
        <div>{article}</div>
        <div>{author}</div>
        <div>{description}</div>
        <div>
          <img src={img} alt={img} />
        </div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default Details;
