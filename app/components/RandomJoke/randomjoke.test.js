import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import RandomJoke from './index';

describe('<RandomJoke />', function () {
  const joke = 'This is a joke';
  it('should display a single div', function () {
    const wrapper = shallow(<RandomJoke randomJoke={joke} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
