import React from "react";
import {IContext, ScrollConsumer, ScrollProvider} from "./context";
import Tracker from "./tracker";

export type TRenderer = (context: IContext) => any;
export type TChild = (context: IContext) => any;

export interface IOverScrollProps {
	anchors?: string;
	children?: TChild;
	className?: string;
	factor?: number;
	render?: TRenderer;
	slides: number;
	throttle?: number;
}

export interface IOverScrollState {
	counter: number;
	scrollOffset: number;
	scrollY: number;
}

const fitTop: React.CSSProperties = {
	left: 0,
	right: 0,
	top: 0
};
/**
 * @return {Object} returns a position sticky polyfill
 */
const overlayStyle: React.CSSProperties = {
	...fitTop,
	height: "100vh",
	position: "sticky"
};

const anchorStyle: React.CSSProperties = {
	...fitTop,
	bottom: 0,
	position: "absolute"
};

class OverScroll extends React.Component<IOverScrollProps, IOverScrollState> {
	public state = {
		counter: 0,
		scrollOffset: 0,
		scrollY: 0
	};
	private tracker: React.RefObject<HTMLDivElement> = React.createRef();
	public static get defaultProps() {
		return {
			factor: 1
		};
	}

	public componentDidMount() {
		this.setState({
			scrollY: window.scrollY
		});
	}

	public render() {
		const {render, children, anchors, slides: pages} = this.props;
		const pass = render || children;
		if (!pass) {
			throw new TypeError(
				`Either children need to be defined or render needs to be defined as a function`
			);
		}
		const {counter: page} = this.state;
		const progress = this.state.scrollOffset / 100;
		switch (typeof render) {
			case "function":
				return (
					<this.Frame>
						{render({
							anchors,
							page,
							pages,
							progress
						})}
					</this.Frame>
				);
			default:
				return (
					<ScrollProvider value={{anchors, page, pages, progress}}>
						<this.Frame>
							<ScrollConsumer>{children}</ScrollConsumer>
						</this.Frame>
					</ScrollProvider>
				);
		}
	}

	/**
	 * THis function provides a frame to allow OverScroll to work.
	 * @param {{children: any}} props
	 * @constructor
	 */
	private Frame = (props: {children: any}) => (
		<React.Fragment>
			<Tracker onScroll={this.handleScroll} throttle={this.props.throttle} />
			<div style={this.frameStyle} ref={this.tracker}>
				{this.anchors}
				<div style={overlayStyle}>{props.children}</div>
			</div>
		</React.Fragment>
	);

	/**
	 * checks for the current position and translates the scroll to index and percent
	 * @param {number} scrollY - window.scrollY
	 */
	private handleScroll = (scrollY: number): void => {
		// make sure the tracker element exists
		if (!this.tracker || !this.tracker.current) {
			return;
		}
		let counter: number = 0;
		let scrollOffset: number = 0;

		// get the offset and check if the top or bottom have been reached
		// top activates the snap mode
		// bottom deactivates the snap mode
		const {top, bottom}: ClientRect = this.tracker.current.getBoundingClientRect();
		const {factor, slides} = this.props;
		const {innerHeight = 0}: Window = window;
		const touchedTop: boolean = top <= 0;
		const touchedEnd: boolean = bottom <= innerHeight;
		if (touchedTop && !touchedEnd) {
			counter = Math.max(
				0,
				Math.min(slides - 1, Math.floor((top * (-1 / factor)) / innerHeight))
			);
			scrollOffset = Math.max(
				0,
				Math.min(100, (((top * -1) % (innerHeight * factor)) / innerHeight / factor) * 100)
			);
		} else if (touchedEnd) {
			counter = slides - 1;
			scrollOffset = 100;
		}
		this.setState({
			counter,
			scrollOffset,
			scrollY
		});
	};

	/**
	 * the frame is used to define the scrollable height.
	 * It works as a `position: sticky` wrapper
	 * @return {Object} returns a style object
	 */
	private get frameStyle(): React.CSSProperties {
		const {slides, factor} = this.props;
		const vh = slides * 100 * factor + 100;
		return {
			height: `${vh}vh`,
			margin: 0,
			position: "relative"
		};
	}

	/**
	 * Allow to use deep links and clickable pagers to navigate
	 * to specific pages inside the slider. Paging is done by simply jumping
	 * to the correct id.
	 * @return {React.ReactElement<HTMLDivElement> | null} returns a div with elements that have an id
	 */
	private get anchors(): React.ReactElement<HTMLDivElement> | null {
		const {anchors, factor, slides} = this.props;
		if (!anchors) {
			return null;
		}
		const vh = 100 * factor;
		const triggers = Array(slides + 1)
			.fill(Boolean)
			.map((x, i) => (
				<span
					id={`${anchors}/${i + 1}`}
					key={`${anchors}:${i + 1}`}
					style={{
						display: "block",
						height: `${vh}vh`
					}}
				/>
			));

		return <div style={anchorStyle}>{triggers}</div>;
	}
}

export default OverScroll;
