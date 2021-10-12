import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Label } from "semantic-ui-react";
import styled from "styled-components";

import "./MainMenu.scss";
import Home from "@Components/Home";
import About from "@Components/About";
import Error404 from "@Components/Error404";
import bannerImg from "@images/banner-books.jpg";

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

function MainMenu() {
  const items = [
    { key: "editorials", name: "Editorials" },
    { key: "review", name: "Reviews" },
    { key: "events", name: "Upcoming Events" },
  ];

  return (
    <>
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

      <Router>
        <Menu>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            About
          </Menu.Item>
          <Link to="/link">Link</Link>
          <Menu.Item as={Link} to="/test">
            test
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default MainMenu;
