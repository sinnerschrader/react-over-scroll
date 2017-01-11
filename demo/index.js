import React from 'react'
import {render} from 'react-dom'
import Slider from '../src'
import styles from './styles.css'

const pages = [
  <h3>Hello</h3>,
  <h3>Hello World</h3>,
  <h3>Hello Kitty</h3>,
  <h3>Cute Kitty</h3>,
  <h3>Awwwww!!!</h3>
]

const renderPages = (page, progress) => (
  <div className={styles.page}>
    <div className={styles.pageInner}>
      <h2>Page: {page + 1}</h2>
      {pages[page]}
      <div className={styles.progress}
         style={{width: `${progress}%`}}></div>
    </div>
  </div>
)

const App = props => {
  return (
    <div>
      <header className={styles.header}>
        <h1>OverScroll</h1>
        <h2>A scroll based slide-show</h2>
      </header>
      <main className={styles.main}>
        <div>
          <h3>Demo page for Overscroll</h3>
          <p>
            OverScroll is a slide-show or content-slider, call it what you want.
            It is a full-screen/viewport element that snaps into fixed mode when
            it reaches the viewports top edge. Scrolling is now translated to paging,
            switching the content each time a predefined scroll amount has been reached.
          </p>
          <p>
            Scroll along this page or press the spacebar to see the content below change.
          </p>
        </div>
      </main>
      <Slider factor={1}
              slides={pages.length}
              children={renderPages}/>
      <footer className={styles.footer}/>
    </div>
  )
}

render(<App/>, document.getElementById('mountPoint'))
