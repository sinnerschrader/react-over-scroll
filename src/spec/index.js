/* eslint-env jest */
import React from 'react'
import {shallow, mount} from 'enzyme'

import OverScroll from '..'

describe('<OverScroll />', () => {
  it('renders children when passed in', () => {
    const render = (a, b) => <div className='unique'/>
    const wrapper = shallow(
      <OverScroll slides={1}
                  factor={1}
                  children={render} />
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = mount(<OverScroll className='custom' children={x => <div/>}/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
})
