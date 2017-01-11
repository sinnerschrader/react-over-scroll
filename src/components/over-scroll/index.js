import React, {Component, PropTypes} from 'react'
import Tracker from '../event-tracker'

class OverScroll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: window.scrollY,
      counter: 0,
      scrollOffset: 0
    }
    this.updateScroll = this.updateScroll.bind(this)
  }

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

  updateScroll (scrollY) {
    let fixed
    let bottom
    let counter = 0
    let scrollOffset = 0

    if (!this.tracker) {
      return
    }

    const {top, height} = this.tracker.getBoundingClientRect()
    const touchedTop = top <= 0
    const touchedEnd = top <= height * -1
    if (touchedTop && !touchedEnd) {
      fixed = true
      counter = ~~(top * (-1 / this.props.factor) / window.innerHeight)
      scrollOffset = top * -1 % (window.innerHeight * this.props.factor) / window.innerHeight / this.props.factor * 101
    } else if (touchedEnd) {
      bottom = true
      counter = this.props.slides - 1
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
      height: `${(this.props.slides) * 100 * this.props.factor}vh`,
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
