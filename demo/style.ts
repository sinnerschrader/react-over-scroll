import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		background: hsl(0, 0%, 10%);
		color: white;
	}
	* {
		box-sizing: border-box;
	}
`;
