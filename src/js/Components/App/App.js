import React from "react";
import styled from "styled-components";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import BooksList from "@Components/BooksList";
import Footer from "@Components/Footer";

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
  return (
    <WrapperApp>
      <HeaderSection />
      <MainMenu />
      <BooksList />
      <Footer />
    </WrapperApp>
  );
};

export default App;
