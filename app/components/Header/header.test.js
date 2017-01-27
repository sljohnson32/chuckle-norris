import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Header from './index';

describe('<Header/>', function () {
  it('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should display a single h4 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('should display a button', function () {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Button')).to.have.length(1);
  });
});
