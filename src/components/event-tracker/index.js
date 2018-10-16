import {Component, PropTypes} from 'react'
import root from 'window-or-global'

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
    this.props.onScroll(root.scrollY)
  }

  componentWillMount () {
    root.document && root.document.addEventListener('scroll', this.trackScroll)
  }

  componentWillUnmount () {
    root.document && root.document.removeEventListener('scroll', this.trackScroll)
  }

  render () {
    return null
  }
}

export default EventTracker
