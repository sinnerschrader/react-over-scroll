import {easeIn, easeInOut} from "@popmotion/easing";
import React from "react";
import OverScroll, {progressable} from "react-over-scroll";
import styled, {StyledComponent} from "styled-components";
import {Inner} from "./elements";
import {Pagers} from "./pager";

const Headline: StyledComponent<any, any> = styled.h3`
	font-size: 1.5rem;
	font-weight: lighter;
	opacity: var(--progress);
	transform: translate3d(calc(100% - 100% * var(--progress)), 0, 0);
`;

const Copy: StyledComponent<any, any> = styled.p`
	font-size: 1rem;
	opacity: var(--progress);
	transform: translate3d(0, calc(100% - 100% * var(--progress)), 0);
`;

const Svg: StyledComponent<any, any> = styled.svg`
	display: block;
	margin: 0 auto;
	width: 100%;
`;

const Figure: StyledComponent<any, any> = styled.figure`
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	display: grid;
	align-items: center;
	justify-items: center;

	@media (orientation: landscape) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-gap: 3rem;
	}
	@media (orientation: portrait) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem;
	}
`;

const ProgressDevices = (props: any) =>
	progressable(
		<Svg viewBox="0 0 897 452">
			<g fill="none" fillRule="evenodd">
				<g stroke="currentColor" transform="translate(681 55)">
					<path
						strokeDashoffset={`${
							props.page < 2
								? 1043.0570068359375
								: props.page > 2
									? 0
									: 1043.0570068359375 +
									  1043.0570068359375 * easeInOut(props.progress)
						}`}
						strokeDasharray="1043.0570068359375"
						fill={`hsla(0, 0%, 0%, ${
							props.page < 3 ? 0 : props.page > 3 ? 1 : props.progress
						})`}
						strokeWidth="2"
						d="M202.986 317H12.097C5.462 317 .083 311.623.083 304.99V12.093C.083 5.46 5.461.083 12.097.083h190.889C209.622.083 215 5.46 215 12.093V304.99c0 6.633-5.378 12.01-12.014 12.01z"
					/>
					<path
						strokeDashoffset={`${
							props.page < 2
								? 869.8319702148438
								: props.page > 2
									? 0
									: 869.8319702148438 +
									  869.8319702148438 * easeInOut(props.progress)
						}`}
						strokeDasharray="869.8319702148438"
						fill={`hsla(0, 0%, 20%, ${
							props.page < 3 ? 0 : props.page > 3 ? 1 : props.progress
						})`}
						d="M17 32h181.999v252.917H17z"
					/>
					<circle
						strokeDashoffset={`${
							props.page < 2
								? 50.072696685791016
								: props.page > 2
									? 0
									: 50.072696685791016 + 50.072696685791016 * props.progress
						}`}
						strokeDasharray="50.072696685791016"
						fill={`hsla(0, 0%, 10%, ${
							props.page < 3 ? 0 : props.page > 3 ? 1 : props.progress
						})`}
						cx="108.021"
						cy="300.021"
						r="8.021"
					/>
					<circle
						strokeDashoffset={`${
							props.page < 2
								? 18.307579040527344
								: props.page > 2
									? 0
									: 18.307579040527344 + 18.307579040527344 * props.progress
						}`}
						strokeDasharray="18.307579040527344"
						fill={`hsla(0, 0%, 10%, ${
							props.page < 3 ? 0 : props.page > 3 ? 1 : props.progress
						})`}
						cx="106.99"
						cy="16.99"
						r="2.99"
					/>
				</g>
				<g stroke="currentColor" transform="translate(1 1)">
					<path
						strokeDashoffset={`${
							props.page < 3
								? 1772.58349609375
								: props.page > 3
									? 0
									: 1772.58349609375 +
									  1772.58349609375 * easeInOut(props.progress)
						}`}
						strokeDasharray="1772.58349609375"
						fill={`hsla(0, 0%, 0%, ${
							props.page < 4 ? 0 : props.page > 4 ? 1 : props.progress
						})`}
						strokeWidth="2"
						d="M594 0H98C84.504 0 73 11.074 73 24.79v326.238h546V24.79C619 11.073 607.537 0 594 0z"
					/>
					<circle
						strokeDashoffset={`${
							props.page < 3
								? 24.491750717163086
								: props.page > 3
									? 0
									: 24.491750717163086 +
									  24.491750717163086 * easeInOut(props.progress)
						}`}
						strokeDasharray="24.491750717163086"
						fill={`hsla(0, 0%, 10%, ${
							props.page < 4 ? 0 : props.page > 4 ? 1 : props.progress
						})`}
						cx="347"
						cy="19"
						r="4"
						strokeWidth="2"
					/>
					<path
						strokeDashoffset={`${
							props.page < 3
								? 1422.086181640625
								: props.page > 3
									? 0
									: 1422.086181640625 + 1422.086181640625 * props.progress
						}`}
						strokeDasharray="1422.086181640625"
						fill={`hsla(0, 0%, 0%, ${
							props.page < 4 ? 0 : props.page > 4 ? 1 : props.progress
						})`}
						strokeWidth="2"
						d="M640.812 382.01H51.288C20.641 382.01 0 371.494 0 367.022v-13.594C0 352.084 1.335 351 2.995 351h686.109c1.662 0 2.999 1.084 2.999 2.428v14.129c-.007 3.535-15.991 14.453-51.291 14.453z"
					/>
					<path
						strokeDashoffset={`${
							props.page < 3
								? 689.7429809570312
								: props.page > 3
									? 0
									: 689.7429809570312 + 689.7429809570312 * props.progress
						}`}
						strokeDasharray="689.7429809570312"
						strokeLinecap="square"
						d="M.5 365.5h689.743"
					/>
					<path
						strokeDashoffset={`${
							props.page < 3
								? 1744.6329345703125
								: props.page > 3
									? 0
									: 1744.6329345703125 + 1744.6329345703125 * props.progress
						}`}
						strokeDasharray="1744.6329345703125"
						fill={`hsla(0, 0%, 20%, ${
							props.page < 4 ? 0 : props.page > 4 ? 1 : props.progress
						})`}
						d="M95 39h501.074v292.009H95zM421 352v3.087c0 2.201-4.333 2.866-7.613 2.866H278.815c-3.45 0-7.815-.664-7.815-2.866V352"
					/>
				</g>
				<g stroke="currentColor" transform="translate(576 177)">
					<path
						strokeDashoffset={`${
							props.page > 0
								? 0
								: 780.2479248046875 + 780.2479248046875 * easeInOut(props.progress)
						}`}
						strokeDasharray="780.2479248046875"
						fill={`hsla(0, 0%, 0%, ${
							props.page < 1 ? 0 : props.page > 1 ? 1 : props.progress
						})`}
						strokeWidth="2"
						d="M130 257.964c0 8.833-7.191 15.992-16.062 15.992H16.063c-8.871 0-16.062-7.159-16.062-15.992V16.073C.001 7.24 7.192.081 16.063.081h97.875C122.809.081 130 7.24 130 16.073v241.891z"
					/>
					<path
						strokeDashoffset={`${
							props.page > 0
								? 0
								: 622.0280151367188 + 622.0280151367188 * easeInOut(props.progress)
						}`}
						strokeDasharray="622.0280151367188"
						fill={`hsla(0, 0%, 20%, ${
							props.page < 1 ? 0 : props.page > 1 ? 1 : props.progress
						})`}
						d="M9 36h111.93v199.084H9z"
					/>
					<path
						strokeDashoffset={`${
							props.page > 0
								? 0
								: 52.05827331542969 + 52.05827331542969 * props.progress
						}`}
						strokeDasharray="52.05827331542969"
						d="M77 25.746c0 .635-.439 1.147-.98 1.147H55.918c-.542 0-.98-.513-.98-1.147v-2.58c0-.635.439-1.147.98-1.147H76.02c.541 0 .98.513.98 1.147v2.58z"
					/>
					<circle
						strokeDashoffset={`${
							props.page > 0
								? 0
								: 18.36880111694336 + 18.36880111694336 * props.progress
						}`}
						strokeDasharray="18.36880111694336"
						fill={`hsla(0, 0%, 10%, ${
							props.page < 1 ? 0 : props.page > 1 ? 1 : props.progress
						})`}
						cx="66"
						cy="12"
						r="3"
					/>
					<ellipse
						strokeDashoffset={`${
							props.page > 0
								? 0
								: 62.5550422668457 + 62.5550422668457 * props.progress
						}`}
						strokeDasharray="62.5550422668457"
						fill={`hsla(0, 0%, 10%, ${
							props.page < 1 ? 0 : props.page > 1 ? 1 : props.progress
						})`}
						cx="65.04"
						cy="254.001"
						rx="10.04"
						ry="10.001"
					/>
				</g>
			</g>
		</Svg>,
		props.progress
	);

export const Devices = (props: any) => {
	return (
		<Figure>
			<ProgressDevices progress={props.progress} page={props.page} />
			<figcaption>
				{progressable(
					<Headline>Built for all screen sizes</Headline>,
					props.page < 1 ? 0 : props.page > 1 ? 1 : easeIn(props.progress)
				)}
				{progressable(
					<Copy>
						React Overscroll relies on the viewport and is therefore ensures responsive
						behavior.
						<br />
						Add your own logic to define how to display the content on different screen
						sizes
					</Copy>,
					props.page < 2 ? 0 : props.page > 2 ? 1 : easeIn(props.progress)
				)}
			</figcaption>
		</Figure>
	);
};
export const Demo = () => (
	<OverScroll slides={5} anchors="!/device-support">
		{context => (
			<Inner hue={231} withPagers={true} pagerSize="1.5rem">
				<Pagers useContext={true} />
				<Devices progress={context.progress} page={context.page} />
			</Inner>
		)}
	</OverScroll>
);
