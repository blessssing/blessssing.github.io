import React from "react";
import bannerImg from "@images/banner-books.jpg";
import styled from "styled-components";

const StyledBanner = styled.img`
  display: ${({ display }) => display && display};
  margin: ${({ margin }) => margin && margin};
  src: ${({ src }) => src && src};
  height: ${({ height }) => height && height};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  min-width: ${({ minWidth }) => minWidth && minWidth};
`;

const Banner = (props) => {
  return <StyledBanner {...props} />;
};

function HeaderSection() {
  return (
    <header>
      <h2>Books store</h2>
      <Banner
        display="block"
        margin="0 auto"
        minWidth="800px"
        maxWidth="1000px"
        height="100px"
        src={bannerImg}
      />
    </header>
  );
}

export default HeaderSection;
