import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon';

import Button from './index';

describe('<Button />', function () {
  it('should display a single button tag', function () {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('should have a prop for className', () => {
    const wrapper = mount(<Button className='a-thing' />)
    expect(wrapper.props().className).to.equal('a-thing');
  })

  it('should have a prop for disabled', () => {
    const wrapper = mount(<Button disabled='true' />)
    expect(wrapper.props().disabled).to.equal('true');
  })

  it('should have a prop for btnText', () => {
    const wrapper = mount(<Button btnText='some stuff' />)
    expect(wrapper.props().btnText).to.equal('some stuff');
  })

  it('should have a onClick event with func', () => {
    const func = sinon.spy();
    const wrapper = shallow(<Button func={func} />);
    wrapper.find('button').simulate('click');
    expect(func.calledOnce).to.equal(true)
  })
});
