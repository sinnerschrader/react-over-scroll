import React from "react";
import styled, {css, StyledComponent} from "styled-components";
import {ScrollConsumer} from "../context";

export const assert = (value: any, type: string): void => {
	const valueType = typeof value;
	if (valueType !== type) {
		throw new TypeError(`Expected "${type}" but "${valueType}" was received`);
	}
};

export interface IPagerProps<T> extends React.HTMLAttributes<HTMLAnchorElement> {
	active?: boolean;
	selected?: boolean;
}

export type PagerProps = IPagerProps<{}>;

export const Pager: StyledComponent<"a", {}, PagerProps> = styled.a`
	position: relative;
	z-index: 2;
	height: var(--pager-size);
	width: var(--pager-size);
	margin: var(--pager-gap) 0.5rem;
	visibility: visible;
	border-radius: 50%;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: currentColor;
	text-decoration: none;
	background-clip: content-box;

	${(props: PagerProps) => css`
		color: var(--color);
		background-color: ${props.selected ? "var(--pager-color-active)" : "var(--pager-color)"};
		border: var(--stroke-width) solid ${props.active ? "var(--marker-color)" : "transparent"};

		&:hover {
			background-color: var(--pager-color-active);
		}
	`};
`;
const StyledPagers: StyledComponent<"nav", {}> = styled.nav`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin: calc(var(--pager-gap) * -1) -0.5rem;
`;

export interface IPagerWrapperProps {
	dark?: boolean;
}

const PagerWrapper: StyledComponent<"div", {}, IPagerWrapperProps> = styled.div`
	${(props: IPagerWrapperProps) => css`
		--marker-width: var(--marker-size);
		--marker-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${props.dark ? "-" : "+"} 30%),
			1
		);
		--pager-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${props.dark ? "-" : "+"} 20%),
			1
		);
		--pager-background-color: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${props.dark ? "+" : "-"} 5%),
			1
		);
		--pager-color-active: hsla(
			var(--background-h),
			var(--background-s),
			calc(var(--background-l) ${props.dark ? "-" : "+"} 10%),
			1
		);
	`};

	position: absolute;
	z-index: 2;
	top: 50%;
	margin: 0 0.5rem;
	left: 0;
	transform: translateY(-50%);
	background-color: var(--pager-background-color);
	border-radius: calc(var(--pager-size) / 2);
`;

export const StyledMarker: StyledComponent<"div", {}> = styled.div`
	position: absolute;
	z-index: 1;
	top: calc((var(--pager-size) / 2) + var(--pager-gap));
	left: calc(0.5rem + (var(--pager-size) - var(--marker-width)) / 2);
	width: var(--marker-width);
	background: var(--marker-color);
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

export interface IMarkerProps {
	page: number;
	progress: number;
}

export const Marker: React.FunctionComponent<IMarkerProps> = props => {
	return (
		<StyledMarker
			style={{
				height: `calc(${props.progress} * (var(--pager-gap) * 2 + var(--pager-size)) + ${
					props.page
				} * (var(--pager-gap) * 2 + var(--pager-size)))`
			}}
		/>
	);
};

export interface IPagerBaseProps extends IPagerWrapperProps {
	pages: number;
	page: number;
	prefix: string;
	progress: number;
	showLabels?: boolean;
}

export const Icon: StyledComponent<"svg", {}> = styled.svg.attrs({
	viewBox: "0 0 24 24"
})`
	width: 1.5rem;
	height: 1.5rem;
	fill: currentColor;
`;

export const PagerBase: React.FunctionComponent<IPagerBaseProps> = props => {
	const scrollTo = (hash: string, target: HTMLElement): void => {
		window.location.hash = hash;
		const el = document.getElementById(hash);
		target.focus();

		// Attempted to implement smooth scrolling if the page changes by one position.
		// The page jumps in several state changes
		// @todo Fix unless a browser bug exists.
		// const index = parseInt(hash.split("/").reverse()[0], 10) - 1;
		// const diff = Math.abs(index - props.page);
		// document.documentElement.style["scroll-behavior"] = diff > 1 ? "auto" : "smooth";

		el.scrollIntoView(true);

		// Optionally if Element.scrollIntoView does not return the expected result.
		// const {top: tEl} = el.getBoundingClientRect();
		// const {top: tBody} = document.body.getBoundingClientRect();
		// const offset = tEl - tBody;
		// window.scrollTo(0, offset);
	};

	const skip = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		scrollTo(`${props.prefix}/${props.pages + 1}`, e.target as HTMLElement);
	};

	return (
		<PagerWrapper dark={props.dark}>
			<StyledPagers>
				<Marker progress={props.progress} page={props.page} />
				{Array(props.pages)
					.fill(Boolean)
					.map((x, i) => {
						const id = `${props.prefix}/${i + 1}`;
						const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
							e.preventDefault();
							scrollTo(id, e.target as HTMLElement);
						};
						return (
							<Pager
								key={id}
								active={i <= props.page}
								selected={i === props.page && props.progress < 1}
								href={`#${id}`}
								onClick={handleClick}>
								{props.showLabels && i + 1}
							</Pager>
						);
					})}
				<Pager
					href={`#${props.prefix}/${props.pages + 1}`}
					selected={props.page === props.pages - 1 && props.progress === 1}
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

export interface IPagersProps extends IPagerWrapperProps {
	useContext?: boolean;
	showLabels?: boolean;
	pages?: number;
	page?: number;
	prefix?: string;
	progress?: number;
}

export const Pagers: React.FunctionComponent<IPagersProps> = props => {
	if (props.useContext) {
		return (
			<ScrollConsumer>
				{context => (
					<PagerBase
						dark={props.dark}
						page={context.page}
						pages={context.pages}
						prefix={context.anchors}
						progress={context.progress}
						showLabels={props.showLabels}
					/>
				)}
			</ScrollConsumer>
		);
	}
	assert(props.page, "number");
	assert(props.pages, "number");
	assert(props.progress, "number");
	assert(props.prefix, "string");
	return (
		<PagerBase
			dark={props.dark}
			page={props.page}
			pages={props.pages}
			prefix={props.prefix}
			progress={props.progress}
			showLabels={props.showLabels}
		/>
	);
};
