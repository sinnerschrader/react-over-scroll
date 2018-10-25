import React from "react";
import ReactDOM from "react-dom";
import styled, {createGlobalStyle, css, StyledComponentClass} from "styled-components";
import OverScroll from "../src";
import xbox from "./images/xbox.png";
import {XBox} from "./xbox";

const GlobalStyle = createGlobalStyle`
	body {
		background: black;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	a {
		color: currentColor;
		text-decoration: none;
		font-weight: normal
	}
	a:hover {
		text-decoration: underline;
	}
`;

const Title = styled.h1`
	text-align: center;
	font-weight: lighter;
	margin: 2rem 0;
	font-size: 4rem;
`;

const Copy = styled.p`
	text-align: center;
	font-weight: lighter;
	margin: 1rem 0;
	font-size: 2rem;
`;

const Inner = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	padding-left: 4rem;
	font-size: 3rem;
	overflow: hidden;
`;

const slideCount = 4;

const Headline = styled.h2`
	position: absolute;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: flex-start;
	font-size: 3rem;
	padding-top: 25vh;
	font-weight: lighter;
`;
interface ISlideProps {
	component: string | React.ComponentClass;
	progress: number;
}
const SlideLeft: React.SFC<ISlideProps> = ({progress, children, component: Component}) => (
	<Component style={{transform: `translate3d(${100 - 100 * progress}vw, 0, 0)`}}>{children}</Component>
);

const SlideUp: React.SFC<ISlideProps> = ({progress, children, component: Component}) => (
	<Component style={{transform: `translate3d(0, ${-100 + 100 * progress}vh, 0)`}}>{children}</Component>
);

const Image = styled.img`
	position: absolute;
	width: calc(100% - 4rem);
	margin-left: 4rem;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
`;

const Wrapper = styled.div`
	position: absolute;
	z-index: 0;
	width: 100%;
	padding-left: 4rem;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	transform-origin: 0 50%;
`;

const Box = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	top: 0;
	right: 0;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	transform-origin: 0 50%;
`;
const Card = styled.div`
	margin: 1rem auto;
	max-width: 60rem;
	padding: 1rem;
	background: white;
	color: black;
	border-radius: 3px;
`;

const Pager:StyledComponentClass<any, any> = styled.a`
	height: 1rem;
	width: 1rem;
	box-shadow: inset 0 0 0 2px white;
	margin: 0.5rem 1rem;
	visibility: visible;
	${(props: any) => css`
		background: ${props.active ? "white" : "none"};
		border-radius: ${props.skipAll ? "0 0 50% 50%" : "50%"};
	`}
`;

const StyledPagers:StyledComponentClass<any, any> = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	visibility: hidden;
`;
interface IPagersProps {
	pages: number;
	page: number;
	prefix: string;
}
const Pagers:React.SFC<IPagersProps> = props => {
	const anchors = [];
	for (let i = 0; i < props.pages; i++) {
		const id = `${props.prefix}/${i + 1}`
		const attrs = {
			active: i === props.page,
			href: `#${id}`,
			key: id,
		}
		anchors.push(
			<Pager {...attrs}/>
		)
	}
	return (
		<StyledPagers>{anchors}
			<Pager href={`#${props.prefix}/${props.pages + 1}`} skipAll={true}/>
		</StyledPagers>
	)
}


const renderFunction = (page, progress) => {
	return (
		<Inner>
			<Pagers page={page} pages={slideCount} prefix={"!/xbox"}/>
			{(() => {
				switch (page) {
					case 0:
						return (
							<Wrapper>
								<XBox progress={progress} />
							</Wrapper>
						);
					case 1:
						return (
							<Wrapper>
								<XBox progress={1} />
								<Image style={{opacity: progress}} src={xbox} />
							</Wrapper>
						);
					case 2:
						return (
							<React.Fragment>
								<SlideUp progress={progress} component={Headline}>
									#xboxone
								</SlideUp>
								<Wrapper style={{transform: `scale3d(${1 - progress / 2}, ${1 - progress / 2}, 1)`}}>
									<XBox progress={1} />
									<Image src={xbox} />
								</Wrapper>
							</React.Fragment>
						);
					case 3:
						return (
							<React.Fragment>
								<Headline>#xboxone</Headline>
								<SlideLeft progress={progress} component={Box}>
									<Card>
										<Copy>
											This is just a simple demo for React OverScroll.
										</Copy>
										<Copy>
											The self drawing Xbox is extracted from{" "}
											<a href="https://codepen.io/MyXoToD/pen/vBlfs">this experiment</a>.
										</Copy>
									</Card>
								</SlideLeft>
								<Wrapper style={{transform: `scale3d(0.5, 0.5, 1)`}}>
									<XBox progress={1} />
									<Image src={xbox} />
								</Wrapper>
							</React.Fragment>
						);
					default:
						return null;
				}
			})()}
		</Inner>
	);
};

class App extends React.Component {
	public render() {
		return (
			<div>
				<GlobalStyle />
				<Title>React OverScroll</Title>
				<Card>
					<Copy>
						OverScroll is a slide-show or content-slider, call it what you want. It is a
						full-screen/viewport element that snaps into place when it reaches the viewports top edge.
					</Copy>
					<Copy>
						Scroll along this page to get a better idea of the behavior. Notice that the page never "snaps"
						due to scroll-jacking. Instead, the progress simply reflects the current scrollPosition and uses{" "}
						<code>position: sticky</code>
					</Copy>
				</Card>
				<OverScroll slides={slideCount} render={renderFunction} anchors='!/xbox'/>
				<Card>
					<Copy>
						Scrolling is translated to paging, switching the content each time a predefined scroll amount
						has been reached. During an active slide two values are available: <code>page: number</code> and{" "}
						<code>progress: number</code>
					</Copy>
					<Copy>Notice how the page smoothly transitions from "snapped" to "scrolling".</Copy>
				</Card>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
