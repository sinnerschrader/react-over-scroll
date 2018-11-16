import styled, {StyledComponent} from "styled-components";

export const Main: StyledComponent<any, any> = styled.main``;

export const Header: StyledComponent<any, any> = styled.header`
	padding: 1rem;
	text-align: center;
	position: relative;
`;

export const Title: StyledComponent<any, any> = styled.h1`
	font-size: 3rem;
	margin: 1rem 0;
	font-weight: lighter;
`;

export const Headline: StyledComponent<any, any> = styled.h2`
	font-size: 1.5rem;
	margin: 0.5rem auto;
	font-weight: lighter;
`;

export const Content: StyledComponent<any, any> = styled.article`
	margin: 1rem auto;
	padding: 1rem;
	max-width: 60rem;
	background: white;
	color: black;
`;

export const Copy: StyledComponent<any, any> = styled.p`
	margin: 1.5rem 0;
`;

export const Footer: StyledComponent<any, any> = styled.footer`
	padding: 3rem 1rem;
`;

export const Link: StyledComponent<any, any> = styled.a`
	color: currentColor;
	text-decoration: none;
	font-weight: bolder;

	&:hover {
		text-decoration: underline;
	}
`;

export const Dl: StyledComponent<any, any> = styled.dl`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
`;

export const Dd: StyledComponent<any, any> = styled.dd`
	font-weight: normal;
	flex: 0 0 calc(80% - 1rem);
	margin: 0 0 0 1rem;
	overflow: hidden;
`;

export const Dt: StyledComponent<any, any> = styled.dt`
	font-weight: bolder;
	flex: 0 0 20%;
	overflow: hidden;
`;

export const Code: StyledComponent<any, any> = styled.code`
	padding: 0.125em 0.25rem;
	margin: -0.125em 0;
	background: hsla(231, 64%, 50%, 1);
	color: hsla(0, 0%, 100%, 1);
	border-radius: 2px;
`;

export const Row: StyledComponent<any, any> = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Column: StyledComponent<any, any> = styled.div`
	flex: 1 1 30rem;
`;
