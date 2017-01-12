import React from 'react'
import {render} from 'react-dom'
import Slider from '../src'
import styles from './styles.css'

const pages = [
  progress => ( // eslint-disable-line react/display-name
    <div>
      <h1>OverScroll</h1>
      <h2>A simple scroll based content-slider</h2>
    </div>
  ),
  progress => ( // eslint-disable-line react/display-name
    <div>
      <h1>{~~(progress)}% scrolled</h1>
      <h2>Know when the slide changes</h2>
      <h3>work with the progress</h3>
    </div>
  ),
  progress => ( // eslint-disable-line react/display-name
    <div>
      <div className={styles.spinner}
           style={{
             color: `hsl(${progress}, 100%, 20%)`,
             transform: `translate(${progress * -2}%, ${progress * 2}%) rotate(${progress / 100 * 360 - 45}deg) scale(${progress / 100 + 1})`
           }} />
    </div>
  )
]

pages.forEach((page, index) => {
  page.displayName = `page${index}`
})

const renderPages = (page, progress) => (
  <div className={styles.page}>
    <header className={styles.pageHeader}><h4>OverScroll</h4></header>
    <section className={styles.pageContent}
             children={pages[page](progress)} />
    <footer className={styles.pageFooter}>
      <div className={styles.progress}
         style={{width: `${progress}%`}}></div>
    </footer>
  </div>
)

const App = props => {
  return (
    <div>
      <header className={styles.header}>
        <h1>OverScroll</h1>
        <h2>A scroll based content-slider</h2>
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

App.displayName = 'App'

render(<App/>, document.getElementById('mountPoint'))
