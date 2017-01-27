import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Settings from './index';

describe('<Settings />', function () {
  it('should render one divs', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should have an input field', () => {
    const wrapper = shallow(<Settings />);
    const name = wrapper.find('Input')
    expect(name).to.have.length(1);
  });

  it('should have an input field with prop for name', () => {
    const wrapper = shallow(<Settings />);
    const input = wrapper.find('Input')
    expect(input.prop('name')).to.equal('name-input');
  });

  it('should have an input field with prop for type', () => {
    const wrapper = shallow(<Settings />);
    const input = wrapper.find('Input')
    expect(input.prop('type')).to.equal('text');
  });

  it('should have a Set button', () => {
    const wrapper = shallow(<Settings />);
    const set = wrapper.find('Button').first()
    expect(set).to.have.length(1);
  });

  it('should have a Set button with prop for name', () => {
    const wrapper = shallow(<Settings />);
    const set = wrapper.find('Button').first()
    expect(set.prop('btnText')).to.equal('SET');
  });

  it('should have a Set button with prop for name', () => {
    const wrapper = shallow(<Settings />);
    const set = wrapper.find('Button').first()
    expect(set.prop('name')).to.equal('setName-btn');
  });

  it('should have a Reset button', () => {
    const wrapper = shallow(<Settings />);
    const reset = wrapper.find('Button').last()
    expect(reset).to.have.length(1);
  });

  it('should have a Reset button with prop for btnText', () => {
    const wrapper = shallow(<Settings />);
    const reset = wrapper.find('Button').last()
    expect(reset.prop('btnText')).to.equal('RESET');
  });

  it('should have a Set button with prop for name', () => {
    const wrapper = shallow(<Settings />);
    const reset = wrapper.find('Button').last()
    expect(reset.prop('name')).to.equal('resetName-btn');
  });

});
