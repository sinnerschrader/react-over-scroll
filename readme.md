# react over-scroll

A scroll based slideshow with wings.

[API Documentation](https://pixelass.github.io/react-over-scroll/api/)  
[Demo](https://pixelass.github.io/react-over-scroll/)

[![npm](https://img.shields.io/npm/v/react-over-scroll.svg)](https://www.npmjs.com/package/react-over-scroll)
[![Coveralls branch](https://img.shields.io/coveralls/pixelass/react-over-scroll.svg)](https://coveralls.io/github/pixelass/react-over-scroll)
[![bitHound Overall Score](https://www.bithound.io/github/pixelass/react-over-scroll/badges/score.svg)](https://www.bithound.io/github/pixelass/react-over-scroll)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  
[![Travis](https://img.shields.io/travis/pixelass/react-over-scroll.svg)](https://travis-ci.org/pixelass/react-over-scroll)
[![David](https://img.shields.io/david/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll)
[![David](https://img.shields.io/david/dev/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll#info=devDependencies&view=table)  
[![GitHub license](https://img.shields.io/github/license/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/issues)
[![GitHub forks](https://img.shields.io/github/forks/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/network)
[![GitHub stars](https://img.shields.io/github/stars/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/stargazers)

## Description
OverScroll is a slide-show or content-slider, call it what you want. It is a full-screen/viewport element that snaps into fixed mode when it reaches the viewports top edge. Scrolling is now translated to paging, switching the content each time a predefined scroll amount has been reached. During an active slide two values are available. (See [Render](https://github.com/pixelass/react-over-scroll/#render) for more information). Take a look at the [Demo](https://pixelass.github.io/react-over-scroll/) to get a better understanding of the behavior.

## Render

The children of OverScroll expect a function which is called with two arguments.

### Example 1
```jsx
const renderSlide = (slide, percent) => (
  <div>
    <div>You are on Slide {slide + 1}</div>
    <div>{percent}% of this slide has been scrolled</div>
  </div>
)
// Usage
// <OverScroll slides={10} children={renderPage} />
```

### Example 2
```jsx
const pages = [<div>Hello</div>,<div>World</div>]
const slider = (
  <OverScroll slides={pages.length}>
    {(page, progress) => (
      <div>
        <section>
          {pages[page]}
        </section>
        <footer>
          <div>Page {page + 1}</div>
          <div>
            <span style={{
              width: `${progress}%`,
              height: 10,
              background: 'currentcolor'
            }}/>
          </div>
        </footer>
      </div>
    )}
  </OverScroll>
)
// Usage
// {slider}
```

## Development

If you want to build this module from source or contribute to this project you
should follow the steps listed below.

### Setup

```shell
npm install
```

### Run dev server

```shell
npm start
```

### Watch for file changes

```shell
npm run watch
```

Known issues: CSS does not work with livereload and requires a manual browser reload.
