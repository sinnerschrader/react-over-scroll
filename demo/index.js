import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import Slider from '../src'
import styles from './styles.css'

const s2Logo = (
  <svg viewBox='0 0 133.68 18' width={134} fill='currentcolor'>
    <path d='M4.39 18C1.55 18 .08 16.48.01 13.41c0-.15.05-.26.21-.28l2.17-.36a.22.22 0 0 1 .28.23c.08 1.86.62 2.58 1.81 2.58s1.65-.59 1.65-2.5-.36-2.5-1.73-3l-1.06-.41c-2.42-1-3.15-2.22-3.15-5C.19 1.67 1.56 0 4.44 0s4.15 1.55 4.31 4.28c0 .15-.08.23-.23.28l-2.06.31c-.15 0-.28-.05-.28-.21-.05-1.44-.52-2.24-1.65-2.24s-1.6.67-1.6 2.11c0 1.62.31 2.11 1.7 2.66l1.06.41c2.3.9 3.2 2.14 3.2 5.13C8.85 16.2 7.71 18 4.39 18zM9.7.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26H9.96a.24.24 0 0 1-.26-.26zM13.9.49a.24.24 0 0 1 .26-.26h2.69a.32.32 0 0 1 .36.26l3.25 12.12h.13V.49a.24.24 0 0 1 .26-.26h1.91a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.51a.32.32 0 0 1-.36-.26l-3.4-12.12h-.15v12.14a.24.24 0 0 1-.26.26h-1.91a.24.24 0 0 1-.26-.26zM24.5.49a.24.24 0 0 1 .26-.26h2.73a.32.32 0 0 1 .36.26l3.25 12.12h.13V.49a.24.24 0 0 1 .26-.26h1.91a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.55a.32.32 0 0 1-.36-.26l-3.4-12.12h-.15v12.14a.24.24 0 0 1-.26.26h-1.91a.24.24 0 0 1-.26-.26zM35.1.49a.24.24 0 0 1 .26-.26h7.19a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-4.54a.14.14 0 0 0-.15.15v4.62a.14.14 0 0 0 .15.15h3.92a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-3.92a.14.14 0 0 0-.15.15v4.79a.14.14 0 0 0 .15.15h4.54a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-7.19a.24.24 0 0 1-.26-.26zM50.85 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.15.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.15.15v5.11a.14.14 0 0 0 .15.15h.9c1.51-.01 2.18-.61 2.18-2.7zM58.44 18c-2.84 0-4.31-1.52-4.38-4.59 0-.15.05-.26.21-.28l2.17-.36a.22.22 0 0 1 .28.23c.08 1.86.62 2.58 1.81 2.58s1.65-.59 1.65-2.5-.36-2.5-1.73-3l-1.06-.41c-2.42-1-3.15-2.22-3.15-5 0-3 1.37-4.67 4.25-4.67s4.15 1.55 4.31 4.28c0 .15-.08.23-.23.28l-2.06.31c-.15 0-.28-.05-.28-.21-.05-1.44-.52-2.24-1.65-2.24s-1.6.67-1.6 2.11c0 1.62.31 2.11 1.7 2.66l1.06.41c2.3.9 3.2 2.14 3.2 5.13-.01 3.47-1.17 5.27-4.5 5.27zM63.96 9c0-4.87.1-5.6.34-6.32a3.77 3.77 0 0 1 4-2.68c2.5 0 4.07 1.29 4.23 4.2 0 .15 0 .28-.18.31l-2.09.36a.22.22 0 0 1-.28-.23c-.08-1.5-.59-2.14-1.6-2.14a1.29 1.29 0 0 0-1.39 1c-.13.41-.18.77-.18 5.52s.05 5.11.18 5.52a1.29 1.29 0 0 0 1.39 1c1 0 1.52-.64 1.6-2.14a.22.22 0 0 1 .28-.23l2.09.36c.15 0 .21.15.18.31-.15 2.91-1.73 4.2-4.23 4.2a3.77 3.77 0 0 1-4-2.68c-.24-.76-.34-1.48-.34-6.36zM73.99.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26V7.4a.14.14 0 0 0 .15.15h3a.14.14 0 0 0 .15-.15V.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26v-7.3a.14.14 0 0 0-.15-.15h-3a.14.14 0 0 0-.15.15v7.3a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26zM90.85 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.16.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.16.15v5.11a.14.14 0 0 0 .16.15h.9c1.58-.01 2.25-.61 2.25-2.7zM97.95.49c.05-.15.13-.26.28-.26h2.17a.28.28 0 0 1 .28.26l3.71 17a.2.2 0 0 1-.21.26h-2.19a.26.26 0 0 1-.28-.26l-.7-3.53h-3.48l-.7 3.53a.27.27 0 0 1-.28.26h-2.19a.2.2 0 0 1-.21-.26zm2.63 11.17l-1.24-6.53h-.08l-1.29 6.52zM105.3.49a.24.24 0 0 1 .26-.26h4c2.3 0 3.64.93 4.26 2.81.31 1 .44 2.14.44 6s-.13 5-.44 6c-.62 1.88-2 2.81-4.26 2.81h-4a.24.24 0 0 1-.26-.26zm2.91 14.78h1.11a1.73 1.73 0 0 0 1.86-1.26c.21-.64.31-1.5.31-5s-.1-4.36-.31-5a1.73 1.73 0 0 0-1.86-1.26h-1.11a.14.14 0 0 0-.15.15v12.23a.14.14 0 0 0 .15.14zM115.43.49a.24.24 0 0 1 .26-.26h7.16a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-4.5a.14.14 0 0 0-.16.15v4.62a.14.14 0 0 0 .16.15h3.92a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-3.92a.14.14 0 0 0-.16.15v4.79a.14.14 0 0 0 .16.15h4.5a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-7.19a.24.24 0 0 1-.26-.26zM131.14 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.15.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.15.15v5.11a.14.14 0 0 0 .15.15h.9c1.55-.01 2.22-.61 2.22-2.7z'/>
  </svg>
)
const center = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100%'
}

const Intro = props => (
  <div>
    <h1>OverScroll</h1>
    <h2>A simple scroll based content-slider</h2>
  </div>
)

const Page2 = props => (
  <div>
    <h1>{~~(props.progress)}%</h1>
    <h2>Know when the content changes</h2>
    <h3>Work with the progress</h3>
  </div>
)

const Page3 = props => (
  <div>
    <h1>{~~(props.progress)}%</h1>
    <h2>Use anchors to jump to pages</h2>
    <h3>⬅︎ Try it here</h3>
  </div>
)

const sliderData = {
  images: [
    '//raw.githubusercontent.com/sinnerschrader/sinnerschrader-website/6bd65a6b4c2838d7955dfe0da1e682d5eee558f7/static/images/backgrounds/module_02_teaser-3/module_01_hero_palm_tuifly_r.jpg',
    '//raw.githubusercontent.com/sinnerschrader/sinnerschrader-website/6bd65a6b4c2838d7955dfe0da1e682d5eee558f7/static/images/backgrounds/module_02_teaser-2/module_01_hero_palm_curved_r.jpg',
    '//raw.githubusercontent.com/sinnerschrader/sinnerschrader-website/6bd65a6b4c2838d7955dfe0da1e682d5eee558f7/static/images/backgrounds/module_02_teaser-4/module_01_hero_palm_maxblue_r.jpg',
    '//raw.githubusercontent.com/sinnerschrader/sinnerschrader-website/6bd65a6b4c2838d7955dfe0da1e682d5eee558f7/static/images/backgrounds/module_02_teaser-6/module_01_hero_palm_raumfeld_r.jpg',
    '//raw.githubusercontent.com/sinnerschrader/sinnerschrader-website/6bd65a6b4c2838d7955dfe0da1e682d5eee558f7/static/images/backgrounds/module_02_teaser-7/module_01_hero_palm_epguide_r.jpg'
  ],

  headlines: [
    'We navigate into the future of aviation.',
    'We transformed content marketing.',
    'We pioneer online trading services.',
    'We make music move to your groove.',
    'We enhance the theme park experience.'
  ],

  subheadlines: [
    'TUIfly, from flight booking to smart travel.',
    'CURVED turns content into a fast-growing business.',
    'The answer to the questions of the FinTech world: maxblue',
    'Raumfeld, enriching the way consumers listen to music at home.',
    'Having fun at Europa-Park even without rollercoasters.'
  ],

  backgrounds: [
    '#03ffb7',
    '#4502da',
    '#ff0354',
    '#03ffb7',
    '#03ffb7'
  ]
}

const ImageSlider = props => {
  const index = Math.min(sliderData.images.length - 1, ~~(props.progress / 100 * (sliderData.images.length)))
  const background = {
    background: sliderData.backgrounds[index]
  }
  return (
    <div className={styles.imageSlider} style={background}>
      <div>
        {sliderData.images.map((src, index) => <img key={index} src={src} style={{display: 'none'}}/>)}
      </div>
      <div className={styles.fullscreenImg} style={{backgroundImage: `url(${sliderData.images[index]})`}}/>
      <h1 children={sliderData.headlines[index]}/>
      <h2 children={sliderData.subheadlines[index]}/>
      <h3>{index + 1} / {sliderData.images.length}</h3>
    </div>
  )
}

const VerticalScroll = props => {
  const style = {
    transform: `translate3d(-${props.progress / sliderData.images.length * (sliderData.images.length - 1)}%, 0, 0)`
  }
  return (
    <div className={styles.verticalScroll}>
      <div className={styles.verticalScrollInner} style={style}>
        {sliderData.images.map((src, index) => {
          const background = {
            backgroundColor: sliderData.backgrounds[index]
          }
          return (
            <div key={index}
                 className={styles.imageBlend}
                 style={background}>
              <div className={styles.verticalScrollSlide}
                   style={{backgroundImage: `url(${src})`}}/>
            </div>
          )
        }
      )}

      </div>
    </div>
  )
}

const StaticImage = props => (
  <div className={styles.verticalScrollInner}>
    <div className={styles.imageBlend}
         style={{backgroundColor: sliderData.backgrounds[0], opacity: props.progress / 100}}>
      <div className={styles.verticalScrollSlide}
           style={{backgroundImage: `url(${sliderData.images[0]})`}}/>
    </div>
  </div>
)
const StaticImage2 = props => (
  <div className={styles.verticalScrollInner}>
    <div className={styles.imageBlend}
         style={{backgroundColor: sliderData.backgrounds[sliderData.backgrounds.length - 1], opacity: 1 - props.progress / 100}}>
      <div className={styles.verticalScrollSlide}
         style={{backgroundImage: `url(${sliderData.images[sliderData.images.length - 1]})`}}/>
  </div>
  </div>
)

const Logo = props => {
  const size = window.innerWidth * 1.5
  const style = {
    width: '80vw',
    fill: 'none',
    stroke: 'currentcolor',
    strokeDasharray: `${size}, ${size / 2}`,
    strokeWidth: 2,
    strokeDashoffset: size - props.progress / 100 * size,
    overflow: 'visible'
  }
  return (
    <div style={center}>
      <svg style={style}
           viewBox='0 0 133.68 18'>
        <path vectorEffect='non-scaling-stroke' d='M4.39 18C1.55 18 .08 16.48.01 13.41c0-.15.05-.26.21-.28l2.17-.36a.22.22 0 0 1 .28.23c.08 1.86.62 2.58 1.81 2.58s1.65-.59 1.65-2.5-.36-2.5-1.73-3l-1.06-.41c-2.42-1-3.15-2.22-3.15-5C.19 1.67 1.56 0 4.44 0s4.15 1.55 4.31 4.28c0 .15-.08.23-.23.28l-2.06.31c-.15 0-.28-.05-.28-.21-.05-1.44-.52-2.24-1.65-2.24s-1.6.67-1.6 2.11c0 1.62.31 2.11 1.7 2.66l1.06.41c2.3.9 3.2 2.14 3.2 5.13C8.85 16.2 7.71 18 4.39 18zM9.7.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26H9.96a.24.24 0 0 1-.26-.26zM13.9.49a.24.24 0 0 1 .26-.26h2.69a.32.32 0 0 1 .36.26l3.25 12.12h.13V.49a.24.24 0 0 1 .26-.26h1.91a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.51a.32.32 0 0 1-.36-.26l-3.4-12.12h-.15v12.14a.24.24 0 0 1-.26.26h-1.91a.24.24 0 0 1-.26-.26zM24.5.49a.24.24 0 0 1 .26-.26h2.73a.32.32 0 0 1 .36.26l3.25 12.12h.13V.49a.24.24 0 0 1 .26-.26h1.91a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.55a.32.32 0 0 1-.36-.26l-3.4-12.12h-.15v12.14a.24.24 0 0 1-.26.26h-1.91a.24.24 0 0 1-.26-.26zM35.1.49a.24.24 0 0 1 .26-.26h7.19a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-4.54a.14.14 0 0 0-.15.15v4.62a.14.14 0 0 0 .15.15h3.92a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-3.92a.14.14 0 0 0-.15.15v4.79a.14.14 0 0 0 .15.15h4.54a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-7.19a.24.24 0 0 1-.26-.26zM50.85 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.15.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.15.15v5.11a.14.14 0 0 0 .15.15h.9c1.51-.01 2.18-.61 2.18-2.7zM58.44 18c-2.84 0-4.31-1.52-4.38-4.59 0-.15.05-.26.21-.28l2.17-.36a.22.22 0 0 1 .28.23c.08 1.86.62 2.58 1.81 2.58s1.65-.59 1.65-2.5-.36-2.5-1.73-3l-1.06-.41c-2.42-1-3.15-2.22-3.15-5 0-3 1.37-4.67 4.25-4.67s4.15 1.55 4.31 4.28c0 .15-.08.23-.23.28l-2.06.31c-.15 0-.28-.05-.28-.21-.05-1.44-.52-2.24-1.65-2.24s-1.6.67-1.6 2.11c0 1.62.31 2.11 1.7 2.66l1.06.41c2.3.9 3.2 2.14 3.2 5.13-.01 3.47-1.17 5.27-4.5 5.27zM63.96 9c0-4.87.1-5.6.34-6.32a3.77 3.77 0 0 1 4-2.68c2.5 0 4.07 1.29 4.23 4.2 0 .15 0 .28-.18.31l-2.09.36a.22.22 0 0 1-.28-.23c-.08-1.5-.59-2.14-1.6-2.14a1.29 1.29 0 0 0-1.39 1c-.13.41-.18.77-.18 5.52s.05 5.11.18 5.52a1.29 1.29 0 0 0 1.39 1c1 0 1.52-.64 1.6-2.14a.22.22 0 0 1 .28-.23l2.09.36c.15 0 .21.15.18.31-.15 2.91-1.73 4.2-4.23 4.2a3.77 3.77 0 0 1-4-2.68c-.24-.76-.34-1.48-.34-6.36zM73.99.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26V7.4a.14.14 0 0 0 .15.15h3a.14.14 0 0 0 .15-.15V.49a.24.24 0 0 1 .26-.26h2.24a.24.24 0 0 1 .26.26v17a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26v-7.3a.14.14 0 0 0-.15-.15h-3a.14.14 0 0 0-.15.15v7.3a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26zM90.85 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.16.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.16.15v5.11a.14.14 0 0 0 .16.15h.9c1.58-.01 2.25-.61 2.25-2.7zM97.95.49c.05-.15.13-.26.28-.26h2.17a.28.28 0 0 1 .28.26l3.71 17a.2.2 0 0 1-.21.26h-2.19a.26.26 0 0 1-.28-.26l-.7-3.53h-3.48l-.7 3.53a.27.27 0 0 1-.28.26h-2.19a.2.2 0 0 1-.21-.26zm2.63 11.17l-1.24-6.53h-.08l-1.29 6.52zM105.3.49a.24.24 0 0 1 .26-.26h4c2.3 0 3.64.93 4.26 2.81.31 1 .44 2.14.44 6s-.13 5-.44 6c-.62 1.88-2 2.81-4.26 2.81h-4a.24.24 0 0 1-.26-.26zm2.91 14.78h1.11a1.73 1.73 0 0 0 1.86-1.26c.21-.64.31-1.5.31-5s-.1-4.36-.31-5a1.73 1.73 0 0 0-1.86-1.26h-1.11a.14.14 0 0 0-.15.15v12.23a.14.14 0 0 0 .15.14zM115.43.49a.24.24 0 0 1 .26-.26h7.16a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-4.5a.14.14 0 0 0-.16.15v4.62a.14.14 0 0 0 .16.15h3.92a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-3.92a.14.14 0 0 0-.16.15v4.79a.14.14 0 0 0 .16.15h4.5a.24.24 0 0 1 .26.26v2a.24.24 0 0 1-.26.26h-7.19a.24.24 0 0 1-.26-.26zM131.14 17.77a.26.26 0 0 1-.28-.18l-2.14-7h-1.32a.14.14 0 0 0-.15.15v6.76a.24.24 0 0 1-.26.26h-2.24a.24.24 0 0 1-.26-.26V.5a.24.24 0 0 1 .26-.26h3.53c3.12 0 5 1.37 5 5.21 0 2.3-.77 3.74-2.09 4.49l2.48 7.58c.05.13 0 .26-.13.26zm-.62-12.33c0-2.06-.67-2.71-2.22-2.71h-.9a.14.14 0 0 0-.15.15v5.11a.14.14 0 0 0 .15.15h.9c1.55-.01 2.22-.61 2.22-2.7z'/>
      </svg>
    </div>
  )
}

Intro.displayName = 'Intro'
Intro.propTypes = {
  progress: PropTypes.number.isRequired
}
Page2.displayName = 'Page2'
Page2.propTypes = {
  progress: PropTypes.number.isRequired
}
Page3.displayName = 'Page3'
Page3.propTypes = {
  progress: PropTypes.number.isRequired
}
Logo.displayName = 'Logo'
Logo.propTypes = {
  progress: PropTypes.number.isRequired
}
StaticImage.displayName = 'StaticImage'
StaticImage.propTypes = {
  progress: PropTypes.number.isRequired
}
VerticalScroll.displayName = 'VerticalScroll'
VerticalScroll.propTypes = {
  progress: PropTypes.number.isRequired
}
StaticImage2.displayName = 'StaticImage2'
StaticImage2.propTypes = {
  progress: PropTypes.number.isRequired
}
ImageSlider.displayName = 'ImageSlider'
ImageSlider.propTypes = {
  progress: PropTypes.number.isRequired
}

const Pagers = props => {
  const anchors = []
  for (let i = 0; i < props.pages; i++) {
    const id = `${props.prefix}/${i + 1}`
    const attrs = {
      href: `#${id}`,
      key: id,
      className: styles.pager + (i === props.page ? ` ${styles.active}` : '')
    }
    anchors.push(
      <a {...attrs}/>
    )
  }
  return (
    <div className={styles.pagers}>{anchors}</div>
  )
}

Pagers.displayName = 'Pagers'
Pagers.propTypes = {
  prefix: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
}

const pages = [Intro, Page2, Page3]
const pages2 = [Logo, StaticImage, VerticalScroll, StaticImage2, Logo, ImageSlider, Logo]

const renderPages = (page, progress, prefix) => {
  const Content = pages[page] || (x => null)

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}><h4>OverScroll</h4></header>
      <div className={styles.pageContent}>
        <Pagers prefix={prefix} pages={pages.length} page={page}/>
        <Content progress={progress}/>
      </div>
      <footer className={styles.pageFooter}>
        <div>{page + 1} / {pages.length}</div>
        <div className={styles.progress}
           style={{width: `${progress}%`}}></div>
      </footer>
    </div>
  )
}

const renderPages2 = (page, progress, prefix) => {
  const Content = typeof pages2[page] === 'function' ? pages2[page] : pages2[pages2.length - 1]
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>{s2Logo}</header>
      <div className={styles.pageContent}>
        <Pagers prefix={prefix} pages={pages2.length} page={page}/>
        <Content progress={progress}/>
      </div>
      <footer className={styles.pageFooter}>
        <div>{page + 1} / {pages2.length}</div>
        <div className={styles.progress}
           style={{width: `${progress}%`}}></div>
      </footer>
    </div>
  )
}

const App = props => {
  return (
    <div>
      <header className={styles.header}>
        {s2Logo}
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
      <Slider factor={0.5}
              slides={pages.length}
              children={renderPages}
              anchors='!/intro'/>
      <div className={styles.main}>
        <h2>Create impressive scroll aware webpages</h2>
        <h3>Animate your content</h3>
        <p>
          With the help of the progress variable you can easily control
          nested slideshows or other elements.
        </p>
      </div>
      <Slider factor={2}
              slides={pages2.length}
              children={renderPages2}
              anchors='!/works'/>
      <footer className={styles.footer}/>
    </div>
  )
}

App.displayName = 'App'

render(<App/>, document.getElementById('mountPoint'))
