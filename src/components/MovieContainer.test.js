import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieContainer from './MovieContainer';
import MovieSummary from './MovieSummary';
import MovieDetail from './MovieDetail';

const movie = {
  id: 135397,
  overview: 'Twenty-two years after the events of Jurassic Park...',
  release_date: '2015-06-12',
  poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
  title: 'Jurassic World',
  vote_average: 6.9,
};

describe('MovieContainer', () => {
  test('Initializes state to summary view', () => {
    const comp = shallow(<MovieContainer {...movie} setRatingFor={jest.fn} />);
    expect(comp.state('detail')).toBe(false);
  });

  test('Initially renders summary view', () => {
    // TODO
  });

  test('Toggling state renders detail view', () => {
    // TODO
  });
});
