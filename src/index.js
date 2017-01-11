import React from 'react'
import Slider from './components/over-scroll'
import lorem from './components/lorem'
import styles from './styles.css'

const renderChildren = (counter, progress) => {
  const specialContent = [
    <h2>There is</h2>,
    <h2>Something</h2>,
    <h2>special</h2>,
    <h2>is coming</h2>,
    <h2>to a browser near you!</h2>,
    <h2>WATCH OUT!!!</h2>,
    <h2>Here it is!!!</h2>
  ]
  return (
    <div>
      <div>Page: {counter}</div>
      {specialContent[counter]}
      <div className={styles.progress}
           style={{width: `${progress}%`}}></div>
    </div>
  )
}

const App = props => {
  return (
    <div>
      <header><h1>HEADER</h1></header>
      <main>
        <div>
          <h3>Demo page for Overscroll</h3>
          <p>Overscroll is a simple scroll based slider. It allows to change the number of viewports that need to be passed to show the next slide.</p>
          <p>Scroll along this page or press the spacebar to see the content below change.</p>
        </div>
        <section>{lorem}</section>
        <section>{lorem}</section>
        <section>{lorem}</section>
      </main>
      <Slider factor={1}
              slides={7}
              children={renderChildren}/>

      <section>{lorem}</section>
      <section>{lorem}</section>
      <section>{lorem}</section>
      <footer>FOOTER</footer>
    </div>
  )
}

export default App
