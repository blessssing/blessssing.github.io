import React from "react";
import "./AddToCartToggle.scss";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBookToCart, removeBookFromCart } from "@reducers/cartSlice";
import { setAddedToCart, setNotAddedToCart } from "@reducers/booksSlice";

const StyledAddBookBtn = styled.button`
  margin: 10px 20px;
  padding: 1.2rem 2.8rem;
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #202020;
    box-shadow: 0 0 5px 0 #3498db inset, 0 0 15px 2px #3498db;
  }
`;

const AddBookBtn = (props) => {
  return <StyledAddBookBtn {...props} />;
};

const AddToCartToggle = ({ book }) => {
  const { id, isAddedToCart } = book;
  const dispatch = useDispatch();

  const ActiveBtn = () => {
    dispatch(addBookToCart(book));
    dispatch(setAddedToCart(id));
  };

  const DisabledBtn = () => {
    dispatch(setNotAddedToCart(id));
    dispatch(removeBookFromCart(id));
  };

  const AddToCart = () => {
    return (
      <button className={"add-book-btn add-to-cart-btn"} onClick={ActiveBtn}>
        Add To Cart
      </button>
    );
  };

  const AddToCartDisabled = () => {
    return (
      <button
        className={"add-book-btn add-to-cart-disabled-btn"}
        onClick={DisabledBtn}
      >
        Remove
      </button>
    );
  };

  return <>{isAddedToCart ? <AddToCartDisabled /> : <AddToCart />}</>;
};

export default AddToCartToggle;
