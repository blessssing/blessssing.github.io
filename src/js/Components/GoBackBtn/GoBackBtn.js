import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "1.2rem" }}>
      <Icon
        onClick={() => {
          navigate(-1); // going to Back Page
        }}
        name="long arrow alternate left"
        color="brown"
        size="big"
        link
      />
      <span>Назад</span>
    </div>
  );
};

export default GoBackBtn;
