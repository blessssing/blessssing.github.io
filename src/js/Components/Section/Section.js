import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: ${({ display }) => display || "block"};
  height: ${({ height }) => height || "100px"};
  margin: ${({ margin }) => margin || "0 auto"};
  max-width: ${({ maxWidth }) => maxWidth || "1000px"};
  min-width: ${({ minWidth }) => minWidth || "800px"};
`;

const Section = (props) => {
  return <StyledSection {...props} />;
};

export default Section;
