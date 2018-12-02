import throttle from "lodash.throttle";
import React from "react";

export type TScrollHandler = (scrollY: number) => void;

export interface IEventTrackerProps {
	onScroll?: TScrollHandler;
	throttle?: number;
}

class Tracker extends React.PureComponent<IEventTrackerProps> {
	private resizeHandler;
	private orientationHandler;
	private scrollHandler;

	public componentDidMount(): void {
		this.addHandlers();
	}

	public componentDidUpdate(oldProps): void {
		if (oldProps.throttle !== this.props.throttle) {
			this.updateHandlers();
		}
	}

	public componentWillUnmount(): void {
		this.removeHandlers();
	}

	public render(): null {
		return null;
	}

	protected trackScroll = (): void => {
		this.props.onScroll(window.scrollY);
	};

	private addHandlers() {
		const eventHandler = this.props.throttle
			? throttle(this.trackScroll, this.props.throttle)
			: this.trackScroll;
		const forceThrottle = throttle(this.trackScroll, 250);

		this.scrollHandler = document.addEventListener("scroll", eventHandler, {
			passive: true
		});
		this.resizeHandler = window.addEventListener("resize", forceThrottle, {
			passive: true
		});
		this.orientationHandler = window.addEventListener("orientationchange", forceThrottle, {
			passive: true
		});
	}

	private removeHandlers() {
		document.removeEventListener("scroll", this.scrollHandler);
		window.removeEventListener("resize", this.resizeHandler);
		window.removeEventListener("resize", this.orientationHandler);
	}

	private updateHandlers() {
		this.removeHandlers();
		this.addHandlers();
	}
}

export default Tracker;
