import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import Order from "@Components/Order";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div className={"cart-container cart"}>
        {(cart.length &&
          cart.map(({ article, title, age, author, img, price }, index) => (
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
                <div>
                  <span>Price $&nbsp;{price}</span>
                </div>
              </div>
            </div>
          ))) || <div>Cart is empty</div>}
      </div>

      {cart.length && <Order />}
    </>
  );
};

export default Cart;
