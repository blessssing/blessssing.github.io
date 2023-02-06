import React, { useRef } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon, Loader } from "semantic-ui-react";
import styled from "styled-components";
import useActions from "@hooks/useActions";

const SearchInput = styled.input.attrs({
  placeholder: "search by book or author",
})`
  padding: 0.7rem 2.4rem 0.7rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  outline-width: 0;
  background-color: #f7f7f7;
  color: #202020;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #21ba45;
  }
  &:focus {
    background-color: #fff;
    color: #21ba45;
    border-color: #85b7d9;
  }
`;

const SearchIndicator = () => {
  const { isLoading } = useSelector((state) => state.search);

  return (
    <>
      {(isLoading && (
        <Loader
          style={{
            position: "absolute",
            top: "19px",
            left: "93%",
          }}
          active
          size="tiny"
        />
      )) || (
        <Icon
          name="search"
          style={{
            position: "absolute",
            top: "9px",
            right: "2px",
          }}
        />
      )}
    </>
  );
};

const Search = () => {
  const { search } = useActions();
  const navigate = useNavigate();
  const resultsContainer = useRef();
  const { value, results } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    search(e.target.value);
    resultsContainer.current.style.display = !results.length ? "none" : "flex";
  };

  return (
    <div
      className="search"
      onMouseLeave={() => (resultsContainer.current.style.display = "none")}
    >
      <SearchInput
        onChange={handleSearch}
        onMouseDown={handleSearch}
        value={value}
      />
      <SearchIndicator />
      <div
        className="search__results-container"
        style={{ display: !results.length ? "none" : "flex" }}
        ref={resultsContainer}
      >
        <div className="results">Найдено результатов: {results.length}</div>
        {results.map(({ title, author }) => (
          <div
            className="book"
            onClick={() => navigate(`/book/${title}`)}
            key={title}
          >
            <div className="header">
              {author}, {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
