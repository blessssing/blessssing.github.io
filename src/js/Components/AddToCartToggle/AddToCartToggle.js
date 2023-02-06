import React from "react";
import "./AddToCartToggle.scss";
import useActions from "@hooks/useActions";

const AddToCartToggle = ({ book }) => {
  const { id, isAddedToCart } = book;
  const {
    addBookToCart,
    removeBookFromCart,
    setAddedToCart,
    setNotAddedToCart,
  } = useActions();

  const AddToCart = () => {
    addBookToCart(book);
    setAddedToCart(id);
  };

  const RemoveFromCart = () => {
    setNotAddedToCart(id);
    removeBookFromCart(id);
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
