import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchContainer from './search';

describe('SearchContainer', () => {
  const wrapper = shallow(<SearchContainer />)
  it('renders search component', () => {
    expect(wrapper.find('Search').exists()).toBe(true);
  });

  it('initialized with state value Luis Fonsi', () => {
    expect(wrapper.state().value).toEqual('Luis Fonsi');
  });

  it('change value not looking the input', () => {
    // const spy = jest.fn(openModal);
    // const spy = jest.spyOn(SearchContainer.prototype, 'handleInputChange');
    const wrapper = shallow(<SearchContainer />)
    const textingValue = 'test value';
    const expectedValue = 'test-value';
    wrapper.instance().handleInputChange = jest.fn(wrapper.instance().handleInputChange);
    wrapper.instance().handleInputChange({
      target: {
        value: textingValue,
      },
    });
    wrapper.update();
    expect(wrapper.instance().handleInputChange).toBeCalled();
    expect(wrapper.state().value).toEqual(expectedValue);
  });
});
