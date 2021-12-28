import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
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

const StyledCart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;

const NavLinkCart = (props) => {
  return <StyledNavLinkCart {...props} />;
};

const WrapperCartBtn = (props) => {
  return <StyledCart {...props} />;
};

const CartBtn = () => {
  return (
    <WrapperCartBtn>
      <NavLinkCart to="/cart">
        <div style={{ fontSize: "1.1rem" }}>Корзина</div>
        <Icon
          name="add to cart"
          size="big"
          flipped="horizontally"
          color="olive"
          link
        />
      </NavLinkCart>
    </WrapperCartBtn>
  );
};

export default CartBtn;
