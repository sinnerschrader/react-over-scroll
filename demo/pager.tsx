import React from "react";
import {Listener} from "react-over-scroll";
import styled, {css, StyledComponent} from "styled-components";
import {Icon} from "./elements";

const assert = (value: any, type: string): void => {
	const valueType = typeof value;
	if (valueType !== type) {
		throw new TypeError(`Expected "${type}" but "${valueType}" was received`);
	}
};

const Pager: StyledComponent<any, any> = styled.a`
	position: relative;
	z-index: 2;
	height: var(--pager-size);
	width: var(--pager-size);
	margin: 0.5rem;
	visibility: visible;
	border-radius: 50%;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: currentColor;
	text-decoration: none;

	${(props: any) => css`
		color: ${props.active ? "var(--font-default)" : "var(--font-default)"};
		background-color: ${props.active
			? "hsla(var(--background-h), var(--background-s), calc(var(--background-l) - 5%), 1)"
			: "hsla(var(--background-h), var(--background-s), calc(var(--background-l) + 5%), 1)"};
		box-shadow: inset 0 0 0 ${props.active ? "var(--stroke-width)" : 0}
			hsla(var(--background-h), var(--background-s), calc(var(--background-l) + 10%), 1);

		&:hover {
			background-color: hsla(
				var(--background-h),
				var(--background-s),
				calc(var(--background-l) - 5%),
				1
			);
		}
	`};
`;
const StyledPagers: StyledComponent<any, any> = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin: -0.5rem;
`;
const PagerWrapper: StyledComponent<any, any> = styled.div`
	position: absolute;
	z-index: 2;
	top: 50%;
	margin: 0 0.5rem;
	left: 0;
	transform: translateY(-50%);
	background: var(--background-color);
	border-radius: calc(var(--pager-size) / 2);
`;

interface IMarkerProps {
	page: number;
	progress: number;
}

const StyledMarker: StyledComponent<any, any> = styled.div`
	--marker-width: var(--pager-size);
	position: absolute;
	z-index: 1;
	top: calc((var(--pager-size) / 2) + 0.5rem);
	left: calc(0.5rem + (var(--pager-size) - var(--marker-width)) / 2);
	width: var(--marker-width);
	background: hsla(var(--background-h), var(--background-s), calc(var(--background-l) - 10%), 1);
	visibility: visible;

	&::before,
	&::after {
		position: absolute;
		content: "";
		display: block;
		height: calc(var(--marker-width) / 2);
		width: var(--marker-width);
		left: 0;
		background: inherit;
	}

	&::before {
		bottom: 100%;
		border-radius: calc(var(--marker-width) / 2) calc(var(--marker-width) / 2) 0 0;
	}

	&::after {
		top: 100%;
		border-radius: 0 0 calc(var(--marker-width) / 2) calc(var(--marker-width) / 2);
	}
`;
const Marker: React.SFC<IMarkerProps> = props => {
	return (
		<StyledMarker
			style={{
				height: `calc(${props.progress} * (1rem + var(--pager-size)) + ${
					props.page
				} * (1rem + var(--pager-size)))`
			}}
		/>
	);
};

interface IPagerBaseProps {
	pages: number;
	page: number;
	prefix: string;
	progress: number;
	showLabels?: boolean;
}

export const PagerBase: React.SFC<IPagerBaseProps> = props => {
	const scrollTo = (hash: string, target: HTMLElement): void => {
		window.location.hash = hash;
		const el = document.getElementById(hash);
		target.focus();

		// Attempted to implement smooth scrolling if the page changes by one position.
		// The page jumps in several state changes
		// @todo Fix unless a browser bug exists.
		// const index = parseInt(id.split("/").reverse()[0], 10) - 1;
		// const diff = Math.abs(index - props.page);
		// document.documentElement.style["scroll-behavior"] = diff > 1 ? "auto" : "smooth";

		el.scrollIntoView(true);

		// Optionally if Element.scrollIntoView does not return the expected result.
		// const {top: tEl} = el.getBoundingClientRect();
		// const {top: tBody} = document.body.getBoundingClientRect();
		// const offset = tEl - tBody;
		// window.scrollTo(0, offset);
	};

	const skip = (e: MouseEvent): void => {
		e.preventDefault();
		scrollTo(`${props.prefix}/${props.pages + 1}`, e.target as HTMLElement);
	};

	return (
		<PagerWrapper>
			<StyledPagers>
				<Marker progress={props.progress} page={props.page} />
				{Array(props.pages)
					.fill(Boolean)
					.map((x, i) => {
						const id = `${props.prefix}/${i + 1}`;
						const handleClick = (e: MouseEvent): void => {
							e.preventDefault();
							scrollTo(id, e.target as HTMLElement);
						};
						return (
							<Pager
								key={id}
								active={i === props.page && props.progress < 1}
								href={`#${id}`}
								onClick={handleClick}>
								{props.showLabels && i + 1}
							</Pager>
						);
					})}
				<Pager
					href={`#${props.prefix}/${props.pages + 1}`}
					active={props.page === props.pages - 1 && props.progress === 1}
					onClick={skip}>
					{props.showLabels && (
						<Icon>
							<path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12" />
						</Icon>
					)}
				</Pager>
			</StyledPagers>
		</PagerWrapper>
	);
};

interface IPagersProps {
	useContext?: boolean;
	showLabels?: boolean;
	pages?: number;
	page?: number;
	prefix?: string;
	progress?: number;
}

export const Pagers: React.SFC<IPagersProps> = props => {
	if (props.useContext) {
		return (
			<Listener>
				{context => (
					<PagerBase
						showLabels={props.showLabels}
						page={context.page}
						pages={context.pages}
						prefix={context.anchors}
						progress={context.progress}
					/>
				)}
			</Listener>
		);
	}
	assert(props.page, "number");
	assert(props.pages, "number");
	assert(props.progress, "number");
	assert(props.prefix, "string");
	return (
		<PagerBase
			showLabels={props.showLabels}
			page={props.page}
			pages={props.pages}
			prefix={props.prefix}
			progress={props.progress}
		/>
	);
};
