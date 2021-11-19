import React from "react";
import styled from "styled-components";

const StyledSectionOuter = styled.section`
  display: ${({ display }) => display || "flex"};
  max-width: ${({ maxWidth }) => maxWidth || "1900px"};
  margin: ${({ margin }) => margin || "0 auto"};
`;

const StyledSectionInner = styled.section`
  display: ${({ display }) => display || "block"};
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: ${({ margin }) => margin || "0 auto"};
  padding: ${({ padding }) => padding || "2rem 0"};
`;

const Section = (props) => {
  return (
    <StyledSectionOuter>
      <StyledSectionInner {...props} />
    </StyledSectionOuter>
  );
};

export default Section;
