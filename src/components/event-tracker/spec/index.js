/* eslint-env jest */
import React from 'react'
import {mount} from 'enzyme'
import sinon from 'sinon'

import EventTracker from '..'

describe('<EventTracker />', () => {
  it('calls componentWillMount', () => {
    sinon.spy(EventTracker.prototype, 'componentWillMount')
    mount(<EventTracker />)
    expect(EventTracker.prototype.componentWillMount.calledOnce).toEqual(true)
  })
  it('calls componentWillunmount', () => {
    sinon.spy(EventTracker.prototype, 'componentWillUnmount')
    const wrapper = mount(<EventTracker />)
    wrapper.unmount()
    expect(EventTracker.prototype.componentWillUnmount.calledOnce).toEqual(true)
  })
})
