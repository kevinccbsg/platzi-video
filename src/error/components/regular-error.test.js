import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegularError from './regular-error';
 
configure({ adapter: new Adapter() });

describe('RegularError', () => {
  it('renders error text', () => {
    const wrapper = mount(<RegularError />);
    expect(wrapper.find('h1').text()).toEqual('Ha ocurrido un error');
  });
});
