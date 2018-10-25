import React from "react";
import Tracker from "./tracker";

type TRenderer = (page: number, progress: number) => any;

interface IOverScrollProps {
	anchors?: string;
	children?: TRenderer;
	className?: string;
	factor?: number;
	render?: TRenderer;
	slides: number;
	throttle?: number;
}

interface IOverScrollState {
	counter: number;
	scrollOffset: number;
	scrollY: number;
}

/**
 * @return {Object} returns a position sticky polyfill
 */
const overlayStyle: React.CSSProperties = {
	height: "100vh",
	left: 0,
	position: "sticky",
	right: 0,
	top: 0
};

const anchorStyle: React.CSSProperties = {
	bottom: 0,
	left: 0,
	position: "absolute",
	right: 0,
	top: 0
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
		const {render, children, throttle: throttleValue} = this.props;
		const renderer = render || children;
		if (!renderer) {
			throw new TypeError(`Either render or children needs to be defined as a renderer`);
		}
		return (
			<React.Fragment>
				<Tracker onScroll={this.handleScroll} throttle={throttleValue} />
				<div style={this.frameStyle} ref={this.tracker}>
					{this.anchors}
					<div style={overlayStyle}>{renderer(this.state.counter, this.state.scrollOffset / 100)}</div>
				</div>
			</React.Fragment>
		);
	}

	/**
	 * checks for the current position and translates the scroll to index and percent
	 * @param  {number} scrollY - window.scrollY
	 */
	private handleScroll = (scrollY: number): void => {
		// make sure the tracker element exists
		if (!this.tracker || !this.tracker.current) {
			return;
		}
		let counter = 0;
		let scrollOffset = 0;

		// get the offset and check if the top or bottom have been reached
		// top activates the snap mode
		// bottom deactivates the snap mode
		const {top, bottom} = this.tracker.current.getBoundingClientRect();
		const {factor, slides} = this.props;
		const {innerHeight = 0} = window;
		const touchedTop = top <= 0;
		const touchedEnd = bottom <= innerHeight;
		if (touchedTop && !touchedEnd) {
			counter = Math.max(0, Math.min(slides - 1, Math.floor((top * (-1 / factor)) / innerHeight)));
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
