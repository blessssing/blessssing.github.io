import React from "react";
import styled from "styled-components";

const StyledSectionOuter = styled.section`
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justify }) => justify || "center"};
  max-width: ${({ maxWidth }) => maxWidth || "1900px"};
  flex-grow: ${({ grow }) => grow || 0};

  @media ${(props) => props.theme.media.tablet} {
    padding: 0 1rem 1.5rem;
  }
`;

const StyledSectionInner = styled.section`
  display: ${({ display }) => display || "block"};
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "0.3rem 0"};
`;

const Section = (props) => {
  return (
    <StyledSectionOuter grow={1}>
      <StyledSectionInner {...props} />
    </StyledSectionOuter>
  );
};

export default Section;
