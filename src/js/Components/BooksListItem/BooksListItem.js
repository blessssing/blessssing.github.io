import React from "react";
import "./BooksListItem.scss";
import { useDispatch } from "react-redux";
import { addBookToCart } from "@reducers/cartSlice";
import styled from "styled-components";

const StyledAddBookBtn = styled.button`
  margin: 10px 20px;
  padding: 1.2rem 2.8rem;
  color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    color: #202020;
    box-shadow: 0 0 5px 0 #3498db inset, 0 0 15px 2px #3498db;
  }
`;

const AddBookBtn = (props) => {
  return <StyledAddBookBtn {...props} />;
};

const BooksListItem = (props) => {
  const dispatch = useDispatch();
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
        <div style={{ fontWeight: 600 }}>Price:&nbsp;$&nbsp;{price}</div>
        <AddBookBtn onClick={() => dispatch(addBookToCart({ ...props }))}>
          Add to cart
        </AddBookBtn>
      </div>
    </div>
  );
};

export default BooksListItem;
