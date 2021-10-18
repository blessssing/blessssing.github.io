import React from "react";
import MainMenu from "@Components/MainMenu";
import HeaderSection from "@Components/HeaderSection";
import styled from "styled-components";

const StyledWrapperCentered = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1180px;
`;

const WrapperApp = (props) => {
  return <StyledWrapperCentered {...props} />;
};

const App = () => {
  return (
    <WrapperApp>
      <HeaderSection />
      <MainMenu />
    </WrapperApp>
  );
};

export default App;
