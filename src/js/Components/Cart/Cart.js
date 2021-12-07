import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={"cart-container cart"}>
      {(cart.length &&
        cart.map(
          ({ article, title, description, age, author, img, price }, index) => (
            <div key={article + index} className={"cart__book"}>
              <div className={"cart__book__wrapper-image"}>
                <img src={img} alt={img} />
              </div>
              <div className={"cart__book__info"}>
                <div>
                  <span>(Art. {article})</span>
                </div>
                <div>
                  <span>{title}</span>
                </div>
                <div>
                  <span>{author}</span>
                </div>
                <div>
                  <span>Age group: {age}</span>
                </div>
                <div className={"btn-wrapper"}>
                  <button className={"btn-buy"}>buy $&nbsp;{price}</button>
                </div>
              </div>
            </div>
          )
        )) || <div>Cart is empty</div>}
    </div>
  );
};

export default Cart;
