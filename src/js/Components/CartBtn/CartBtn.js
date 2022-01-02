import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, Label } from "semantic-ui-react";
import styled from "styled-components";

const StyledNavLinkCart = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  color: #202020;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f4f4f4;
    color: #21ba45;
  }
  &:focus {
    background-color: #eaeaea;
    color: #21ba45;
  }
`;

const NavLinkCart = (props) => {
  return <StyledNavLinkCart {...props} />;
};

const CartBtn = () => {
  const countBooks = useSelector((state) => state.cart.cart.length);

  return (
    <NavLinkCart to="/cart" style={{ position: "relative" }}>
      <div style={{ fontSize: "1.1rem" }}>Корзина</div>
      <Icon
        name="add to cart"
        size="big"
        flipped="horizontally"
        color="olive"
        link
      />
      <Label circular floating color="teal">
        {countBooks || 0}
      </Label>
    </NavLinkCart>
  );
};

export default CartBtn;
