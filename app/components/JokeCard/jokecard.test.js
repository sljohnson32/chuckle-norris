import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import JokeCard from './index';

describe('<JokeCard />', function () {
  const anArray = ('cheeseburger', 'hummus', 'veggies')
  it('should display a favorite button', function () {
    const wrapper = shallow(<JokeCard joke={anArray} />);
    expect(wrapper.find('Button')).to.have.length(1);
  });

  it('should have a button that triggers setFav function', () => {
    const setFav = sinon.spy();
    const wrapper = mount(<JokeCard joke={anArray} setFav={setFav} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(setFav.calledOnce).to.equal(true);
  });

});
