import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Loader } from "semantic-ui-react";
import styled from "styled-components";
import { search } from "@reducers/searchSlice";

const SearchInput = styled.input.attrs({
  placeholder: "search",
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
  console.log("isLoading ", isLoading);

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
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.search);
  console.log("value ", value);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <SearchInput
          onChange={(e) => dispatch(search(e.target.value))}
          value={value}
        />
        <SearchIndicator />
      </div>
    </div>
  );
};

export default Search;
