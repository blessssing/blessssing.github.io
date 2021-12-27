import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Icon } from "semantic-ui-react";
import { moveToTrash } from "@reducers/cartSlice";
import Order from "@Components/Order";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div className={"cart-container cart"}>
        {(cart.length &&
          cart.map(
            ({ id, article, title, age, genre, author, img, price }, index) => (
              <div key={article + index} className={"cart__book"}>
                <div
                  className={"cart__book__wrapper-image"}
                  onClick={() => navigate(`/book/${title}`)}
                >
                  <img src={img} alt={img} />
                </div>
                <div className={"cart__book__info"}>
                  <div>
                    <span>(Art. {article})</span>
                  </div>
                  <div>
                    <span>
                      <b>Title</b>: {title}
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Author:</b> {author}
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Genre:</b> {genre}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>
                    <span>
                      Age group: <small>{age}</small>
                    </span>
                  </div>
                  <div className="price">
                    <span>
                      <b>Price: $&nbsp;{price}</b>
                    </span>
                  </div>
                </div>
                <div className="icon-group">
                  <Icon
                    className="move-to-trash-icon"
                    onClick={() => dispatch(moveToTrash(id))}
                    name="trash alternate outline"
                    size="large"
                    link
                    color="grey"
                  />
                </div>
              </div>
            )
          )) || <h4 style={{ margin: "0 auto" }}>Cart is empty</h4>}
      </div>

      {(cart.length && <Order />) || null}
    </>
  );
};

export default Cart;
