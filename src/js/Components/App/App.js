import React, { useEffect } from "react";
import styled from "styled-components";
import MainContent from "@Components/MainContent";
import Footer from "@Components/Footer";
import Menu from "@Components/Menu";
import useActions from "@hooks/useActions";
import SliderCarousel from "@Components/SliderCarousel";

const StyledWrapperCentered = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  min-height: 100vh;

  @media ${(props) => props.theme.media.tablet} {
    padding: 0;
  }
`;

const WrapperApp = (props) => {
  return <StyledWrapperCentered {...props} />;
};

const App = () => {
  const { fetchBooks } = useActions();

  useEffect(() => {
    setTimeout(() => {
      fetchBooks();
    }, 500);
  }, []);

  const navigation = [
    { key: "home", name: "Главная", to: "/" },
    { key: "about", name: "О нас", to: "/about" },
  ];

  return (
    <WrapperApp>
      <Menu navigation={navigation} />
      <SliderCarousel />
      <MainContent />
      <Footer />
    </WrapperApp>
  );
};

export default App;
