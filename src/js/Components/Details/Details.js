import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log("params ", params);

  return <div>Details: {params.name}</div>;
};

export default Details;
