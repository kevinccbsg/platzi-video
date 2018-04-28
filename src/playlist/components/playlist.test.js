import React from 'react';
import { shallow } from 'enzyme';
import Playlist from './playlist';
import { playlist as playlistFixture } from '../../fixtures';

const props = {
  playlist: playlistFixture,
};

describe('Playlist', () => {
  const playlist = shallow(<Playlist {...props} />);
  it('renders div with class Playlist', () => {
    expect(playlist.find('div.Playlist').exists()).toBe(true);
  });

  it('renders two Media components', () => {
    expect(playlist.find('Media')).toHaveLength(2);
  });
});
