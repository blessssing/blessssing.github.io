import React from "react";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import BooksList from "@Components/BooksList";
import styled from "styled-components";
import Footer from "@Components/Footer";

const StyledWrapperCentered = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  height: 100vh;
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
