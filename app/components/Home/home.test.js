import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Home from './index';

describe('<Home />', function () {
  it('should render two divs', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should have a Get Jokes button', () => {
    const wrapper = shallow(<Home />);
    const favs = wrapper.find('Button').first()
    expect(favs).to.have.length(1);
  });

  it('should have a Get Jokes button with prop for name', () => {
    const wrapper = shallow(<Home />);
    const favs = wrapper.find('Button').first()
    expect(favs.prop('name')).to.equal('jokes-btn');
  });

  it('should have an input field', () => {
    const wrapper = shallow(<Home />);
    const num = wrapper.find('Input')
    expect(num).to.have.length(1);
  });

  it('should have an input field with prop for name', () => {
    const wrapper = shallow(<Home />);
    const num = wrapper.find('Input')
    expect(num.prop('name')).to.equal('num-input');
  });

  it('should have an input field with prop for type', () => {
    const wrapper = shallow(<Home />);
    const num = wrapper.find('Input')
    expect(num.prop('type')).to.equal('number');
  });

});
