import React from "react";
import {Code, Content, Copy, Dd, Dl, Dt, Headline} from "./elements";

export const Docs = () => (
	<React.Fragment>
		<Content>
			<Copy>
				OverScroll is a slide-show or content-slider, call it what you want. It is a
				full-screen/viewport element that snaps into fixed mode when it reaches the
				viewports top edge. Scrolling is now translated to paging, switching the content
				each time a predefined scroll amount has been reached.
			</Copy>
			<Copy>
				During an active slide two dynamic values are available{" "}
				<Code>progress: number</Code> and <Code>page: number</Code>.
			</Copy>
			<Headline>Accessibility</Headline>
			<Copy>
				OverScroll relies on default browser behavior and page scroll. It is therefore easy
				to navigate the page with any input device e.g. trackpad, mouse or keyboard. Any
				device that or even software that scrolls the page is able to control OverScroll.
			</Copy>
			<Headline>Configuration</Headline>
			<Copy>You can configure OverScroll with some very basic settings.</Copy>
			<Dl>
				<Dt>
					<Code>anchors: ?string</Code>
				</Dt>
				<Dd>
					Anchors allow browser history and deep-links through hashes.
					<br />
					You can use anchors like
					<br />
					<Code>"works"</Code> to create the link format
					<br />
					<Code>"example.com#works/1"</Code>
					<br />
					or
					<br />
					<Code>"!/works"</Code> to create the link format
					<br />
					<Code>"example.com#!/works/1"</Code>
				</Dd>
				<Dt>
					<Code>factor: ?number</Code>
				</Dt>
				<Dd>
					The factor is used to translate scrolling to progress.
					<br />
					The default value <Code>1</Code> will translate <Code>100vh</Code> to a range
					from <Code>0</Code> to <Code>1</Code>
				</Dd>
				<Dt>
					<Code>slides: number</Code>
				</Dt>
				<Dd>
					<strong>required</strong>
					<br />
					The number of pages to scroll through. Each page has its own progress scope.
				</Dd>
			</Dl>
		</Content>
	</React.Fragment>
);
