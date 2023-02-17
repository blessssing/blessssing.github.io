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
                  <div className="article">
                    <span>Артикул товара {article}</span>
                  </div>
                  <div>
                    <span>
                      <b>Название</b>:&nbsp;{title}
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Автор:</b>&nbsp;{author}
                    </span>
                  </div>
                  <div className="genre">
                    <span>
                      <b>Жанр:</b>&nbsp;{genre}
                    </span>
                  </div>
                  <div className="age-category">
                    <span>
                      Возрастная категория:&nbsp;<small>{age}</small>
                    </span>
                  </div>
                  <div className="price">
                    <span>
                      <b>Цена: &#8381;&nbsp;{price}</b>
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
          )) || <h4 style={{ margin: "0 auto" }}>Корзина пуста</h4>}
      </div>

      {(cart.length && <Order />) || null}
    </>
  );
};

export default Cart;
