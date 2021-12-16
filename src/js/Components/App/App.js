import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import Footer from "@Components/Footer";
import Menu from "@Components/Menu";
import { fetchBooks } from "@reducers/booksSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      // console.log("App timeout 0.5 sec books");

      dispatch(fetchBooks());
    }, 500);
  }, [dispatch]);

  const navigation = [
    { key: "home", name: "Home", to: "/" },
    { key: "about", name: "About", to: "/about" },
  ];

  return (
    <WrapperApp>
      <HeaderSection />
      <Menu navigation={navigation} />
      <MainMenu />
      <Footer />
    </WrapperApp>
  );
};

export default App;
