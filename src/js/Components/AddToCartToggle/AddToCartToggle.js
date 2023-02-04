import React from "react";
import "./AddToCartToggle.scss";
import { useDispatch } from "react-redux";
import { addBookToCart, removeBookFromCart } from "@reducers/cartSlice";
import { setAddedToCart, setNotAddedToCart } from "@reducers/booksSlice";

const AddToCartToggle = ({ book }) => {
  const { id, isAddedToCart } = book;

  const dispatch = useDispatch();

  const AddToCart = () => {
    dispatch(addBookToCart(book));
    dispatch(setAddedToCart(id));
  };

  const RemoveFromCart = () => {
    dispatch(setNotAddedToCart(id));
    dispatch(removeBookFromCart(id));
  };

  const AddToCartBtn = () => (
    <button className={"card-book-btn add-to-cart-btn"} onClick={AddToCart}>
      Добавить в корзину
    </button>
  );

  const RemoveFromCartBtn = () => (
    <button
      className={"card-book-btn remove-from-cart-btn"}
      onClick={RemoveFromCart}
    >
      Убрать из корзины
    </button>
  );

  return <>{isAddedToCart ? <RemoveFromCartBtn /> : <AddToCartBtn />}</>;
};

export default AddToCartToggle;
