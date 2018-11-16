import {hot} from "imhotep";
import React from "react";
import {Demo} from "./demo";
import {Docs} from "./docs";
import {Footer, Header, Link, Main, Title} from "./elements";
import {Examples} from "./examples";
import {GithubCorner} from "./github-corner";
import {GlobalStyle} from "./style";

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Header>
					<Title>React Overscroll</Title>
					<GithubCorner />
				</Header>
				<Main>
					<Docs />
					<Demo />
					<Examples />
				</Main>
				<Footer>
					Crafted with 💖 by <Link href="https://github.com/pixelass">Gregor Adams</Link>
				</Footer>
			</React.Fragment>
		);
	}
}

export default hot(module)(App);
