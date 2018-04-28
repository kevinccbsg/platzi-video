import React from 'react';
import { shallow } from 'enzyme';
import Category from './category';
import { category as categoryFixture } from '../../fixtures';

const props = {
  ...categoryFixture,
};

describe('Category', () => {
  const category = shallow(<Category {...props} />);
  it('renders Category div', function() {
    expect(category.find('div.Category').exists()).toBe(true);
  });

  it(`renders category prop description: ${props.description}`, function() {
    expect(category.find('.Category-description').text()).toEqual(props.description);
  });

  it(`renders category prop title: ${props.title}`, function() {
    expect(category.find('.Category-title').text()).toEqual(props.title);
  });

  it('renders Playlist component', function() {
    expect(category.find('Playlist').exists()).toBe(true);
  });
});
