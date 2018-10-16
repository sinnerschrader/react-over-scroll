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
  it('allows to pass initial page', () => {
    const initialPage = 1
    const render = (page) => <div className={`page-${page}`} />
    const wrapper = mount(<OverScroll children={render} factor={1} initialPage={initialPage} slides={[0, 1, 2]} />)
    expect(wrapper.contains(<div className={`page-${initialPage}`}/>)).toEqual(true)
  })
  it('clamps initial page to zero', () => {
    const initialPage = -1
    const render = (page) => <div className={`page-${page}`} />
    const wrapper = mount(<OverScroll children={render} factor={1} initialPage={initialPage} slides={[0, 1, 2]} />)
    expect(wrapper.contains(<div className={`page-0`}/>)).toEqual(true)
  })
  it('clamps initial page to maximum', () => {
    const initialPage = 10
    const render = (page) => <div className={`page-${page}`} />
    const wrapper = mount(<OverScroll children={render} factor={1} initialPage={initialPage} slides={[0, 1, 2]} />)
    expect(wrapper.contains(<div className={`page-2`}/>)).toEqual(true)
  })
  // TODO: Trigger onPageChange and test it
})
