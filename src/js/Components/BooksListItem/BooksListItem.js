import React from "react";
import "./BooksListItem.scss";
import { useNavigate } from "react-router-dom";
import AddToCartToggle from "@Components/AddToCartToggle";
import CustomNavLink from "@Components/CustomNavLink";

const BooksListItem = (props) => {
  const { title, description, age, genre, author, img, price } = props;
  const navigate = useNavigate();

  return (
    <div className="books-list-item">
      <h4 className="title">{title}</h4>
      <div className={"books-list-item__container"}>
        <div
          className={"wrapper-image"}
          onClick={() => navigate(`/book/${title}`)}
        >
          <img src={img} alt={img} />
        </div>
        <div className="info">
          <CustomNavLink
            to={`/books/${author}`}
            className="author"
            // onClick={() => navigate(`/books/${author}`)}
          >
            {author}
          </CustomNavLink>
          <div className="genre">
            <b>Жанр:&nbsp;</b>
            {genre}&nbsp;&nbsp;<small>{age}</small>
          </div>
          <div className="description">{description}</div>
          <div className="price">Цена:&nbsp;{price}&nbsp;&#8381;</div>
          <AddToCartToggle book={props} />
        </div>
      </div>
    </div>
  );
};

export default BooksListItem;
