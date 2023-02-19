import React from "react";
import "./AddToCartToggle.scss";
import useActions from "@hooks/useActions";
import { useNavigate } from "react-router-dom";

const AddToCartToggle = ({ book }) => {
  const { addBookToCart } = useActions();
  const navigate = useNavigate();

  const AddToCart = () => {
    addBookToCart(book);
    navigate(`/cart`);
  };

  const AddToCartBtn = () => (
    <button className={"card-book-btn add-to-cart-btn"} onClick={AddToCart}>
      Добавить в корзину
    </button>
  );

  return <AddToCartBtn />;
};

export default AddToCartToggle;
