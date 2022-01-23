import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  gap: ${({ gap }) => gap || 0};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
