import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HandleError from './handle-error';
 
configure({ adapter: new Adapter() });

const ChildrenNoError = () => <h1>Content</h1>;

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>;
};

describe('HandleError', function() {
  it('state initializes handleError to false', () => {
    const wrapper = mount((
      <HandleError>
        <ChildrenNoError />
      </HandleError>
    ));
    expect(wrapper.state().handleError).toBe(false);
  });

  it('componentDidCatch been called', () => {
    const spy = jest.spyOn(HandleError.prototype, 'componentDidCatch');
    // if we want to hide the error
    jest.spyOn(window._virtualConsole, 'emit').mockImplementation(() => false);
    const wrapper = mount((
      <HandleError>
        <ProblemChild />
      </HandleError>
    ));
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().handleError).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});