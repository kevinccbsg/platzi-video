import React from 'react';
import { shallow } from 'enzyme';
import Categories from './categories';
import { categories as categoriesFixture } from '../../fixtures';

const props = {
  categories: categoriesFixture,
};

describe('Categories', () => {
  const categories = shallow(<Categories {...props} />);
  it('renders SearchContainer component', () => {
    expect(categories.find('SearchContainer').exists()).toBe(true);
  });

  it('renders two Category components', () => {
    expect(categories.find('Category')).toHaveLength(2);
  });
});
