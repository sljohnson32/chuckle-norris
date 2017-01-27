import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Input from './index';

describe('<Input />', function () {
  it('should display a single input field', function () {
    const wrapper = shallow(<Input/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a prop for className', () => {
    const wrapper = mount(<Input className='a-thing' />)
    expect(wrapper.props().className).to.equal('a-thing');
  })

  it('should have a prop for type', () => {
    const wrapper = mount(<Input type='a thing' />)
    expect(wrapper.props().type).to.equal('a thing');
  })

  it('should have a prop for value', () => {
    const wrapper = mount(<Input value='some stuff' />)
    expect(wrapper.props().value).to.equal('some stuff');
  })
  
});
