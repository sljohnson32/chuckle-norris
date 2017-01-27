import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Favs from './index';

describe('<Favs />', function () {
  const anArray = ['stuff', 'other stuff', 'some stuff']
    it('component should render as a div', () => {
      const wrapper = shallow(<Favs favJokes={anArray}/>);
      expect(wrapper.find('div')).to.have.length(1);
  });
});
