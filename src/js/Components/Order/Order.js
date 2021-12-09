import React from "react";
import "./Order.scss";
import { useSelector } from "react-redux";

const Order = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("cart ", cart);

  return (
    <div className={"order"}>
      <h3>Order</h3>
      <div className={"order__books-wrapper"}>
        {cart.map(({ author, title, price }, index) => (
          <div key={title + index} className={"book"}>
            <div>
              <span className={"title"}>{title}</span>
            </div>
            <div>
              <span className={"article"}>{author}</span>
            </div>

            <div>
              <span className={"price"}>$&nbsp;{price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={"total"}>Total: sum all?</div>
      <button className={"order__buy-btn"}>Buy</button>
    </div>
  );
};

export default Order;
