import throttle from "lodash.throttle";
import React from "react";

export type TScrollHandler = (scrollY: number) => void;

export interface IEventTrackerProps {
	onScroll?: TScrollHandler;
	throttle?: number;
}

class Tracker extends React.PureComponent<IEventTrackerProps> {
	private eventHandler;

	public componentDidMount(): void {
		this.addHandler();
	}

	public componentDidUpdate(oldProps): void {
		if (oldProps.throttle !== this.props.throttle) {
			this.updateHandler();
		}
	}

	public componentWillUnmount(): void {
		this.removeHandler();
	}

	public render(): null {
		return null;
	}

	protected trackScroll = (): void => {
		this.props.onScroll(window.scrollY);
	};

	private addHandler() {
		const eventHandler = this.props.throttle
			? throttle(this.trackScroll, this.props.throttle)
			: this.trackScroll;
		this.eventHandler = document.addEventListener("scroll", eventHandler, {
			passive: true
		});
	}

	private removeHandler() {
		document.removeEventListener("scroll", this.eventHandler);
	}

	private updateHandler() {
		this.removeHandler();
		this.addHandler();
	}
}

export default Tracker;
