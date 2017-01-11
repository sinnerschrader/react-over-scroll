import {Component, PropTypes} from 'react'

class EventTracker extends Component {
  /**
   * A simple tracker for `window.scrollY`
   * @param {Object} props
   * @param {Function} props.onScroll - eventListener
   */
  constructor (props) {
    super(props)
    this.state = {}
    this.trackScroll = this.trackScroll.bind(this)
  }

  static propTypes () {
    return {
      onScroll: PropTypes.func.isRequired
    }
  }

  trackScroll () {
    this.props.onScroll(window.scrollY)
  }

  componentWillMount () {
    window.addEventListener('scroll', this.trackScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.trackScroll)
  }

  render () {
    return null
  }
}

export default EventTracker
