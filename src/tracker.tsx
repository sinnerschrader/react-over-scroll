import throttle from "lodash.throttle";
import React from "react";

type TScrollHandler = (scrollY: number) => void;

interface IEventTrackerProps {
	onScroll?: TScrollHandler;
	throttle?: number;
}
class Tracker extends React.PureComponent<IEventTrackerProps> {
	private eventHandler;

	public componentDidMount(): void {
		const eventHandler = this.props.throttle ? throttle(this.trackScroll, this.props.throttle) : this.trackScroll;
		this.eventHandler = document.addEventListener("scroll", eventHandler, {
			passive: true
		});
	}

	public componentWillUnmount(): void {
		document.removeEventListener("scroll", this.eventHandler);
	}

	public render(): null {
		return null;
	}

	protected trackScroll = (): void => {
		this.props.onScroll(window.scrollY);
	};
}

export default Tracker;
