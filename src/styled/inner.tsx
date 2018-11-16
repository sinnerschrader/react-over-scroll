import styled, {css, StyledComponent} from "styled-components";

export interface IInnerTheme {
	color?: string;
	hue?: number;
	lightness?: string;
	markerSize?: string;
	pagerSize?: string;
	saturation?: string;
	strokeWidth?: string;
}

export interface IInnerProps {
	theme?: IInnerTheme;
	withPagers?: boolean;
}

export const Inner: StyledComponent<"section", IInnerTheme, IInnerProps> = styled.section`
	${(props: IInnerProps) => css`
		--pager-size: ${props.theme.pagerSize};
		--marker-size: ${props.theme.markerSize};
		--background-h: ${props.theme.hue};
		--background-s: ${props.theme.saturation};
		--background-l: ${props.theme.lightness};
		--background-color: hsla(var(--background-h), var(--background-s), var(--background-l), 1);
		--stroke-color: ${props.theme.color};
		--stroke-width: ${props.theme.strokeWidth};
		--font-default: ${props.theme.color};
		padding: 1rem 1rem 1rem ${props.withPagers ? "calc(var(--pager-size) + 2rem)" : "1rem"};
		color: ${props.theme.color};
	`};

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	overflow: hidden;
	background: var(--background-color);
`;

Inner.defaultProps = {
	theme: {
		color: "white",
		hue: 0,
		lightness: "48%",
		markerSize: "3rem",
		pagerSize: "3rem",
		saturation: "48%",
		strokeWidth: "1px"
	}
};

export const themes = {
	color: {
		blue: {
			color: "white",
			hue: 231,
			lightness: "48%",
			saturation: "48%"
		},
		green: {
			color: "white",
			hue: 122,
			lightness: "49%",
			saturation: "39%"
		},
		orange: {
			color: "white",
			hue: 14,
			lightness: "57%",
			saturation: "100%"
		},
		purple: {
			color: "white",
			hue: 291,
			lightness: "42%",
			saturation: "64%"
		},
		red: {
			color: "white",
			hue: 4,
			lightness: "58%",
			saturation: "90%"
		},
		yellow: {
			color: "black",
			hue: 54,
			lightness: "62%",
			saturation: "100%"
		}
	},
	default: {
		color: "white",
		hue: 0,
		lightness: "48%",
		markerSize: "3rem",
		pagerSize: "3rem",
		saturation: "48%",
		strokeWidth: "1px"
	},
	pagers: {
		big: {
			markerSize: "3rem",
			pagerSize: "3rem"
		},
		medium: {
			markerSize: "1.5rem",
			pagerSize: "1.5rem"
		},
		minimal: {
			markerSize: "2px",
			pagerSize: "1rem"
		},
		small: {
			markerSize: "1.5rem",
			pagerSize: "1.5rem"
		}
	},
	stroke: {
		bold: {
			strokeWidth: "2px"
		},
		light: {
			strokeWidth: "1px"
		},
		none: {
			strokeWidth: "0"
		}
	}
};
