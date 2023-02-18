import "./CustomNavLink.scss";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: ${({ color }) => color || "#4183c4"};
  transition: ${({ transition }) => transition || "0.2s ease"};

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "palevioletred"};
  }

  .active {
    color: palevioletred;
  }
`;

const CustomNavLink = ({ children, to, className, ...props }) => {
  return (
    <StyledNavLink to={to} className={className} {...props}>
      {children}
    </StyledNavLink>
  );
};

export default CustomNavLink;
