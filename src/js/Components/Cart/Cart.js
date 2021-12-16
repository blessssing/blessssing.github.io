import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { moveToTrash } from "@reducers/cartSlice";
import Order from "@Components/Order";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div className={"cart-container cart"}>
        {(cart.length &&
          cart.map(({ id, article, title, age, author, img, price }, index) => (
            <div key={article + index} className={"cart__book"}>
              <div className={"cart__book__wrapper-image"}>
                <img src={img} alt={img} />
              </div>
              <div className={"cart__book__info"}>
                <div>
                  <span>(Art. {article})</span>
                </div>
                <div>
                  <span>Title: {title}</span>
                </div>
                <div>
                  <span>Author: {author}</span>
                </div>
                <div>
                  <span>Age group: {age}</span>
                </div>
                <div>
                  <span>Price: $&nbsp;{price}</span>
                </div>
              </div>
              <div style={{ display: "flex", padding: "1rem 0" }}>
                <Icon
                  style={{ alignSelf: "flex-end" }}
                  onClick={() => dispatch(moveToTrash(id))}
                  name="trash alternate outline"
                  size="large"
                  link
                  color="grey"
                />
              </div>
            </div>
          ))) || <h4 style={{ margin: "0 auto" }}>Cart is empty</h4>}
      </div>

      {(cart.length && <Order />) || null}
    </>
  );
};

export default Cart;
