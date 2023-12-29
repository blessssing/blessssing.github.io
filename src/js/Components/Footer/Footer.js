import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="social-container">
				<h5 className="social title">Связаться со мной</h5>

				<div className="social">
					Telegram: @blesssssingjs&nbsp;&nbsp;&nbsp;
					<a
						className="link"
						href="https://t.me/blesssssing"
						target="_blank"
						rel="noreferrer"
					>
						https://t.me/blesssssingjs
					</a>
				</div>
				<div className="social">Skype: Azure</div>
				<div className="social">Mail: betterricherhigher@gmail.com</div>
			</div>
			<div className="rights">
				<span>Все права защищены 2024.</span>
			</div>
		</footer>
	);
};

export default Footer;
