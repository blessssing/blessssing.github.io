import React, { useEffect } from "react";
import "./Order.scss";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "@reducers/cartSlice";

const Order = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  // console.log("cart ", cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, []);

  return (
    <div className={"order"}>
      <hr />
      <h3>Order</h3>
      <div className={"order__books-wrapper"}>
        {cart.map(({ author, title, price }, index) => (
          <div key={title + index} className={"book"}>
            <div>
              <span className={"title"}>
                <b>{title}</b>
              </span>
            </div>
            <div>
              <span className={"author"}>{author}</span>
            </div>
            <div>
              <span className={"price"}>$&nbsp;{price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={"total"}>
        <b>Total: $&nbsp;{total}</b>
      </div>
      <button className={"order__buy-btn"}>Buy</button>
    </div>
  );
};

export default Order;
