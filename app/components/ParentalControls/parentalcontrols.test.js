import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import ParentalControls from './index';

describe('<ParentalControls />', function () {
  it('should display a single h3 tag', function () {
    const wrapper = shallow(<ParentalControls />);
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('should display a single input field for the slider', function () {
    const wrapper = shallow(<ParentalControls />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have an input that triggers updatesControls', () => {
    const updateControls = sinon.spy();
    const wrapper = mount(<ParentalControls updateControls={updateControls} />);
    const input = wrapper.find('input');
    input.simulate('click');
    expect(updateControls.calledOnce).to.equal(true);
  });

});
