import React from "react";
import styled from "styled-components";

const StyledSectionOuter = styled.section`
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justify }) => justify || "center"};
  max-width: ${({ maxWidth }) => maxWidth || "1900px"};
`;

const StyledSectionInner = styled.section`
  display: ${({ display }) => display || "block"};
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "0.3rem 0"};
`;

const Section = (props) => {
  return (
    <StyledSectionOuter>
      <StyledSectionInner {...props} />
    </StyledSectionOuter>
  );
};

export default Section;
