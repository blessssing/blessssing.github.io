import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {(cart.length &&
        cart.map(
          ({ article, title, description, age, author, img, price }, index) => (
            <div key={article + index}>
              <div>
                <span>
                  (Art. {article})&nbsp;{title}
                </span>
              </div>
              <div className={"wrapper-image"}>
                <img src={img} alt={img} />
              </div>
              <div>
                <span>{author}</span>
              </div>
              <div>
                <span>{age}</span>
              </div>
              <div>
                <span>{description}</span>
              </div>
              <button>buy</button>
              <span>$&nbsp;{price}</span>
            </div>
          )
        )) || <div>Cart is empty</div>}
    </div>
  );
};

export default Cart;
