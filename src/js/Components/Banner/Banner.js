import React from "react";
import styled from "styled-components";

const StyledBanner = styled.img`
  display: ${({ display }) => display || "block"};
  margin: ${({ margin }) => margin};
  src: ${({ src }) => src};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Banner = (props) => {
  return <StyledBanner {...props} />;
};

export default Banner;
