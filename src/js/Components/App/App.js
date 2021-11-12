import React, { useEffect } from "react";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import BooksList from "@Components/BooksList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchBooks } from "@reducers/booksSlice";

const StyledWrapperCentered = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
`;

const WrapperApp = (props) => {
  return <StyledWrapperCentered {...props} />;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <WrapperApp>
      <HeaderSection />
      <MainMenu />
      <BooksList />
    </WrapperApp>
  );
};

export default App;
