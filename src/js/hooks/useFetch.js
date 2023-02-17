import { useEffect } from "react";

const useFetch = (url) => {
  let status = {
    data: {},
  };

  const fetchNow = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log("data ", data));
  };

  useEffect(() => {
    fetchNow();
  });

  return {};
};

export default useFetch;
