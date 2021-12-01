import React from "react";
import { Icon } from "semantic-ui-react";

const Cart = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "1rem",
        gap: "0.5rem",
      }}
    >
      <div style={{ fontSize: "1.1rem" }}>Cart</div>
      <Icon
        name="add to cart"
        size="big"
        flipped="horizontally"
        color="olive"
        link
      />
    </div>
  );
};

export default Cart;
