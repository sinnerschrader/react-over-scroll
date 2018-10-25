import React, {Component, PropTypes} from 'react'
import Tracker from './components/event-tracker'
import {position} from './components/css-supports'

class OverScroll extends Component {
  /**
   * a scroll based slideshow with wings
   * @param {Object} props
   * @param {String} props.className
   * @param {render} props.children - render function for children
   * @param {string} props.anchors - allow navigation via pagers
   *                                 (`anchors='!/works'` will create a url hashbang `#!/works/[1,2,3...]``)
   *                                 (`anchors='works'` will create a url hash `#works/[1,2,3...]``)
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
   * @return {ReactNode} - returns a reactDOM element
   */

  static propTypes () {
    return {
      className: PropTypes.string,
      children: PropTypes.func.isRequired,
      anchors: PropTypes.string,
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
    let snapToBottom
    let counter = 0
    let scrollOffset = 0

    // make sure the tracker element exists
    if (!this.tracker) {
      return
    }
    // get the offset and check if the top or bottom have been reached
    // top activates the snap mode
    // bottom deactivates the snap mode
    const {top, bottom} = this.tracker.getBoundingClientRect()
    const innerHeight = window.innerHeight || 0
    const touchedTop = top <= 0
    const touchedEnd = bottom <= innerHeight
    if (touchedTop && !touchedEnd) {
      fixed = true
      counter = Math.max(0, Math.min(this.props.slides - 1, ~~(top * (-1 / this.props.factor) / innerHeight)))
      scrollOffset = Math.max(0, Math.min(100, top * -1 % (innerHeight * this.props.factor) / innerHeight / this.props.factor * 100))
    } else if (touchedEnd) {
      snapToBottom = true
      counter = this.props.slides - 1
      scrollOffset = 100
    }
    this.setState({
      scrollY,
      fixed,
      counter,
      scrollOffset,
      bottom: snapToBottom
    })
  }

  /**
   * the frame is used to define the scrollable height.
   * It works as a `position: sticky` wrapper
   * @return {Object} returns a style object
   */
  get frameStyle () {
    const slideCount = this.props.slides
    const factor = this.props.factor || 1
    const vh = slideCount * 100 * factor + 100
    return {
      height: `${vh}vh`,
      position: 'relative',
      margin: 0
    }
  }

  /**
   * a polyfilled `position: sticky` helper.
   * uses the prefixed `position: sticky` style and offers a fallback with
   * `position: fixed`. The fallback requires to manually snap the box to the top and bottom
   * @return {Object} returns a position sticky polyfill
   */
  get overlayStyle () {
    return {
      position: position.sticky || (this.state.fixed ? 'fixed' : 'absolute'),
      top: position.sticky ? 0 : this.state.bottom ? 'auto' : 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100vh'
    }
  }

  /**
   * allow to use deeplinks and clickable pagers to navigate
   * to speciffic pages inside the slider. Paging is done by simply jumpimg
   * to the correct id.
   * @return {null|ReactNode} returns a div with elements that have an id
   */
  get anchors () {
    if (!this.props.anchors) {
      return null
    }
    const anchorStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
    const vh = 100 * (this.props.factor || 1)
    const anchors = []
    for (let i = 0; i < this.props.slides; i++) {
      const id = `${this.props.anchors}/${i + 1}`
      const props = {
        id,
        key: id,
        style: {
          display: 'block',
          marginTop: i > 0 ? '1px' : 0,
          height: i > 0 ? `calc(${vh}vh - 1px)` : `${vh}vh`
        }
      }
      anchors.push(
        <span {...props}/>
      )
    }
    return (
      <div style={anchorStyle}>{anchors}</div>
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <Tracker onScroll={this.updateScroll}/>
        <div style={this.frameStyle}
             ref={x => { this.tracker = x }}>
          {this.anchors}
          <div style={this.overlayStyle}>
            {this.props.children(this.state.counter, this.state.scrollOffset, this.props.anchors)}
          </div>
        </div>
      </div>
    )
  }
}

export default OverScroll
