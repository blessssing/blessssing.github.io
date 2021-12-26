import React from "react";
import { useParams } from "react-router-dom";
import GoBackBtn from "@Components/GoBackBtn";

const Details = () => {
  const params = useParams();
  console.log("params ", params);

  return (
    <div>
      <GoBackBtn />
      Details: {params.name}
    </div>
  );
};

export default Details;
