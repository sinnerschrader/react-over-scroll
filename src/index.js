import React, {Component, PropTypes} from 'react'
import Tracker from './components/event-tracker'

class OverScroll extends Component {
  /**
   * a scroll based slideshow with wings
   * @param  {Object} props
   * @param {String} props.className
   * @param {render} props.children - render function for children
   * @param {Number} props.slides - number of slides
   * @param {Number} [props.factor = 1] - scroll factor defines how many viewport heights page
   *  have to be scrolled to trigger the next page
   *  - 1 = 100vh
   *  - 2 = 200vh
   */
  constructor (props) {
    super(props)
    this.state = {
      scrollY: window.scrollY,
      counter: 0,
      scrollOffset: 0
    }
    this.updateScroll = this.updateScroll.bind(this)
  }
  /**
   * @typedef render
   * @type Function
   * @param {Number} index - currently active index
   * @param {Number} percent - percent of active slide scrolled
   * @return {ReactElement} - returns a reactDOM element
   */

  static propTypes () {
    return {
      className: PropTypes.string,
      children: PropTypes.func.isRequired,
      slides: PropTypes.number.isRequired,
      factor: PropTypes.number.isRequired
    }
  }

  static defaultProps () {
    return {
      factor: 1
    }
  }

  /**
   * checks for the current position and translates the scroll to index and percent
   * @param  {Number} scrollY - window.scrollY
   */
  updateScroll (scrollY) {
    let fixed
    let bottom
    let counter = 0
    let scrollOffset = 0

    // make sure the tracker element exists
    if (!this.tracker) {
      return
    }
    // get the offset and check if the top or bottom have been reached
    // top activates the snap mode
    // bottom deactivates the snap mode
    const {top, height} = this.tracker.getBoundingClientRect()
    const touchedTop = top <= 0
    const touchedEnd = top <= height * -1
    if (touchedTop && !touchedEnd) {
      fixed = true
      counter = ~~(top * (-1 / this.props.factor) / window.innerHeight)
      scrollOffset = top * -1 % (window.innerHeight * this.props.factor) / window.innerHeight / this.props.factor * 100
    } else if (touchedEnd) {
      bottom = true
      counter = this.props.slides - 1
      scrollOffset = 100
    }

    this.setState({
      scrollY,
      fixed,
      counter,
      scrollOffset,
      bottom
    })
  }

  get frameStyle () {
    return {
      height: `${this.props.slides * 100 * (this.props.factor || 1)}vh`,
      position: 'relative',
      marginBottom: '100vh'
    }
  }

  get overlayStyle () {
    return {
      position: this.state.fixed ? 'fixed' : 'absolute',
      top: this.state.bottom ? 'auto' : 0,
      left: 0,
      right: 0,
      bottom: !this.state.bottom ? 'auto' : '-100vh',
      height: '100vh'
    }
  }

  render () {
    return (
      <div className={this.props.className}>
        <Tracker onScroll={this.updateScroll}/>
        <div style={this.frameStyle}
             ref={x => { this.tracker = x }}>
          <div style={this.overlayStyle}>
            {this.props.children(this.state.counter, (this.state.scrollOffset))}
          </div>
        </div>
      </div>
    )
  }
}

export default OverScroll
