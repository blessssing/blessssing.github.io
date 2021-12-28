import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div>
        <div>Связаться со мной</div>
        <div>Mail: betterricherhigher@gmail.com</div>
        <div>Telegram: @blesssssing</div>
        <div>Skype: Azure</div>
      </div>
      <p
        style={{
          fontSize: "0.8rem",
        }}
      >
        <span>Все права защищены 2022.</span>
      </p>
    </footer>
  );
};

export default Footer;
