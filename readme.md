# react over-scroll

<center>[DEMO](https://pixelass.github.io/react-over-scroll/) | [DOCUMENTATION](https://pixelass.github.io/react-over-scroll/api)</center>

[![npm](https://img.shields.io/npm/v/react-over-scroll.svg)](https://www.npmjs.com/package/react-over-scroll)
[![GitHub license](https://img.shields.io/github/license/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/pixelass/react-over-scroll.svg)](https://travis-ci.org/pixelass/react-over-scroll)  
[![David](https://img.shields.io/david/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll)  
[![David](https://img.shields.io/david/dev/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll#info=devDependencies&view=table)

```
yarn add react-over-scroll
```

## Description

OverScroll is a slide-show or content-slider, call it what you want. It is a full-screen/viewport element that snaps into fixed mode when it reaches the viewports top edge. Scrolling is now translated to paging, switching the content each time a predefined scroll amount has been reached. During an active slide two values are available. (See [Render](https://github.com/pixelass/react-over-scroll/#render) for more information). Take a look at the [Demo](https://pixelass.github.io/react-over-scroll/) to get a better understanding of the behavior.

## Render

OverScroll allows the usage of a child function or a render property.

### Example 1

```jsx
import React from "react";
import OverScroll from "react-over-scroll";

export const Example = () => (
	<OverScroll pages={5}>
		{({page, progress}) => (
			<div>
				<ul>
					<li>progress: {progress}</li>
					<li>page: {page}</li>
				</ul>
			</div>
		)}
	</OverScroll>
);
```

### Example 2

```jsx
import React from "react";
import OverScroll from "react-over-scroll";

const renderPages = ({page, progress}) => (
	<div>
		<ul>
			<li>progress: {progress}</li>
			<li>page: {page}</li>
		</ul>
	</div>
);

export const Example = () => <OverScroll pages={5} render={renderPages} />;
```

## Configuration

-   `anchors: ?string`: Use anchors to allow deep-links and browser history.
-   `factor: ?number`: Change the factor that translates scroll offset to progress.
-   `pages: number`: The number of pages. Each page has its own progress scope.

```jsx
import React from "react";
import OverScroll from "react-over-scroll";

export const Example = () => (
	<OverScroll pages={5} anchors="!/example" factor{2}>
		{({page, progress, anchors}) => (
			<div>
				<ul>
					<li>progress: {progress}</li>
					<li>page: {page}</li>
					{Array(5).fill(Boolean).map((x, i) => {
						// Add links to for each page
						return (
							<li key={i}>
								<a href={`#${anchors}/${i + 1}`}>Go to Page {i + 1}</a>
							</li>
						)
					})}
				</ul>
			</div>
		)}
	</OverScroll>
);
```

## Advanced

### Listener

You can import a listener to build plugins. `Listener` is only active if a child function is used.

```jsx
import React from "react";
import OverScroll, {Listener} from "react-over-scroll";

export const MyPlugin = () => (
	<Listener>
	{({page, progress}) => (
		<div>
			<ul>
				<li>progress: {progress}</li>
				<li>page: {page}</li>
			</ul>
		</div>
	)}
	</Listener>
);

export const Example = () => (
	<OverScroll pages={2}>
		{() => (
			<MyPlugin />
		)}
	</OverScroll>
);
```

### progressable

Overscroll provides a helper to add a progress variable to your component.

```jsx
import React from "react";
import OverScroll, {progressable, Listener} from "react-over-scroll";
import styled from "styled-components";

const Box = styled.div`
  height: 1rem;
  width: calc(var(--progress, 0) * 100%;
  background: currentColor; 
`

// Using Listener
const ProgressBar = () => (
	<Listener>{
		({progress}) => progressable(<Box/>, progress))
	}</Listener>
);
// Usage
// <ProgressBar/>

// Using properties
// const ProgressBar = ({progress}) => progressable(<Box/>, progress));
// Usage
// <ProgressBar progress={progress}/>

export const Example = () => (
	<OverScroll pages={5}>
		{({page, progress}) => (
			<div>
				<ul>
					<li>progress: {progress}</li>
					<li>page: {page}</li>
					<ProgressBar/>
				</ul>
			</div>
		)}
	</OverScroll>
);
```
### Styled elements

Overscroll provides a wrapper and pagers.

```jsx
import React from "react";
import {ThemeProvider} from "styled-components";
import OverScroll, {Listener} from "react-over-scroll";
import {Inner, Pagers, themes} from "react-over-scroll/lib/src/styled";

export const Example = () => (
	<OverScroll slides={5} anchors="!/example">
		{context => (
			<ThemeProvider theme={themes.color.blue}>
				<Inner withPagers={true}>
					<Pagers useContext={true} />
					<ul>
						<li>progress: {context.progress}</li>
						<li>page: {context.page}</li>
					</ul>
				</Inner>
			</ThemeProvider>
		)}
	</OverScroll>
);
```

## Development

If you want to build this module from source or contribute to this project you
should follow the steps listed below.

### Setup

```bash
yarn
```

### Run dev server

```bash
yarn dev --hot
```

For more options take a look at the `package.json` for this project.

Copyright © 2018 - [Gregor Adams](mailto:greg@pixelass.com)
