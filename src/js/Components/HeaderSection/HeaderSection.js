import React from "react";
import bannerImg from "@images/banner-books.jpg";
import Banner from "@Components/Banner";

const HeaderSection = () => {
  return (
    <header>
      <Banner
        display="block"
        margin="0 auto"
        width="100%"
        height="100px"
        src={bannerImg}
      />
    </header>
  );
};

export default HeaderSection;
