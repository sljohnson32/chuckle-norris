// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import {expect} from 'chai';
// import sinon from 'sinon';
//
// import App from './index';
// import Button from '../Button';
//
// describe('<App />', function () {
//   it('should display a single h1 tag', function () {
//     const wrapper = shallow(<Header/>);
//     expect(wrapper.find('h1')).to.have.length(1);
//   });
//   it('should trigger our logStuff function', () => {
//     const logStuff = sinon.spy();
//     const wrapper = mount(<Button handleClick={logStuff} />);
//     wrapper.simulate('click');
//     expect(logStuff.calledOnce).to.equal(true);
//   });
//   it('Each joke has a star icon button for favorites', () => {
//    const wrapper = shallow(<Favs favJokes={anArray}/>);
//    const button = wrapper.find('Button').last()
//    expect(button.prop('btnText')).to.equal('★')
// });
// });
