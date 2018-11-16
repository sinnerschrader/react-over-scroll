import {circInOut} from "@popmotion/easing";
import React from "react";
import styled, {StyledComponent, ThemeProvider} from "styled-components";
import OverScroll, {progressable, TRenderer} from "../";
import {Inner, Pagers, themes} from "../lib/src/styled";
import {Column, Content, Copy, Dd, Dl, Dt, Headline, Link, Row} from "./elements";

const DebugBox: StyledComponent<any, any> = styled.p`
	height: 1rem;
	width: calc(100% * var(--progress));
	margin: 0.5rem 0;
	background: white;
	box-shadow: inset 0 0 0 2px black;
`;

const Debugger = (props: any) => (
	<React.Fragment>
		<Dl>
			<Dt>Anchors:</Dt> <Dd>{props.anchors || "none"}</Dd>
			<Dt>Throttle:</Dt> <Dd>{props.throttle || "none"}</Dd>
			<Dt>Factor:</Dt> <Dd>{props.factor || 1}</Dd>
			<Dt>Page:</Dt>{" "}
			<Dd>
				{props.page + 1} of {props.pages}
			</Dd>
			<Dt>Progress:</Dt> <Dd>{props.progress.toFixed(6)}</Dd>
			<Dt>Timeline:</Dt> <Dd>{(props.page + props.progress).toFixed(6)}</Dd>
		</Dl>
		<div>
			{Array(props.pages)
				.fill(Boolean)
				.map((x, i) =>
					progressable(
						<DebugBox key={i} />,
						i > props.page ? 0 : i < props.page ? 1 : props.progress
					)
				)}
		</div>
	</React.Fragment>
);

const renderDefault: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.green}}>
		<Inner>
			<Headline>Example with default settings</Headline>
			<Debugger {...props} />
		</Inner>
	</ThemeProvider>
);

const renderEasing: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.yellow}}>
		<Inner>
			<Headline>Example with easing</Headline>
			<Debugger {...props} progress={circInOut(props.progress)} />
			<Copy>
				Each element can use an easing function do change the dynamics.
				<br />
				To keep Overscroll simple easing is not part of the options but should instead be
				used where needed.
			</Copy>
		</Inner>
	</ThemeProvider>
);

const renderThrottled2: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.orange}}>
		<Inner>
			<Headline>Example with throttle</Headline>
			<Debugger {...props} throttle={250} />
		</Inner>
	</ThemeProvider>
);

const renderAnchors: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.red}}>
		<Inner>
			<Headline>Example with anchors</Headline>
			<Debugger {...props} />
			<ul>
				{Array(props.pages)
					.fill(Boolean)
					.map((x, i) => (
						<li key={i}>
							<Link href={`#${props.anchors}/${i + 1}`}>Page {i + 1}</Link>
						</li>
					))}
				<li>
					<Link href={`#${props.anchors}/${props.pages + 1}`}>End / Skip</Link>
				</li>
			</ul>
		</Inner>
	</ThemeProvider>
);

const renderPagers: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.purple, ...themes.pagers.big}}>
		<Inner withPagers={true}>
			<Pagers {...props} prefix={props.anchors} showLabels={true} />
			<Headline>Example with pagers</Headline>
			<Debugger {...props} />
		</Inner>
	</ThemeProvider>
);

const renderFactor: TRenderer = props => (
	<ThemeProvider theme={{...themes.color.blue, ...themes.pagers.small, ...themes.stroke.bold}}>
		<Inner withPagers={true}>
			<Pagers {...props} prefix={props.anchors} />
			<Headline>Example with factor</Headline>
			<Debugger {...props} factor={0.5} />
		</Inner>
	</ThemeProvider>
);

export const Examples = () => (
	<React.Fragment>
		<Content>
			<Headline>Examples</Headline>
			<Copy>
				Scroll through the different examples to see how different settings change the
				behavior of the OverScroll instance.
			</Copy>
			<Copy>
				Some examples have pages or links to allow skipping or jumping to specific pages.
			</Copy>
		</Content>
		<Row>
			<Column>
				<OverScroll slides={2} render={renderDefault} />
			</Column>
			<Column>
				<OverScroll slides={2} render={renderEasing} />
			</Column>
		</Row>
		<Row>
			<Column>
				<OverScroll slides={2} render={renderThrottled2} throttle={250} />
			</Column>

			<Column>
				<OverScroll slides={2} render={renderAnchors} anchors={"!/examples/anchors"} />
			</Column>
		</Row>
		<Row>
			<Column>
				<OverScroll slides={2} render={renderPagers} anchors={"!/examples/pagers"} />
			</Column>
			<Column>
				<OverScroll
					slides={4}
					factor={0.5}
					render={renderFactor}
					anchors={"examples/factor"}
				/>
			</Column>
		</Row>
	</React.Fragment>
);
