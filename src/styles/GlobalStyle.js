import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: ${({ color, theme }) => color || theme.colors.bgBody};
}
`;

export const theme = {
	colors: {
		primary: "#212121",
		secondary: "#4899AE",
		white: "white",
		bgBody: "#F7F8FA",
		goldenrod: "goldenrod",
		gold: "gold",
	},
	media: {
		phone: "(max-width: 500px)",
		tablet: "(max-width: 991px)",
	},

	// $screen-sm: 576px;
	// $screen-md: 768px;
	// $screen-lg: 992px;
	// $screen-xl: 1200px;
	// === === ===
	// $screen-xs-max: 575px;
	// $screen-sm-max: 767px;
	// $screen-md-max: 991px;
	// $screen-lg-max: 1199px;
};
