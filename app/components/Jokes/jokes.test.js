import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Jokes from './index';

describe('<Jokes />', function () {

  const anArray = ['stuff', 'other stuff', 'some stuff']

  it('should render one div', () => {
    const wrapper = shallow(<Jokes jokes={anArray} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
  
});
