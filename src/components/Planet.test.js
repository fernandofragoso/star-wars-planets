import React from 'react';
import ReactDOM from 'react-dom';
import Planet from './Planet';
import renderer from 'react-test-renderer';

let getPlanet = (population = "10000", films = "1") => {
  return <Planet
    name="name"
    population={population}
    climate="climate"
    terrain="terrain"
    films={films}
    loading="false"
    error="false" />
}

let mockPlanet = <Planet
  name="name"
  population="10000"
  climate="climate"
  terrain="terrain"
  films="1"
  loading="false"
  error="false" />

it('renders correctly', () => {
  const tree = renderer.create(getPlanet()).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without population and films', () => {
  const tree = renderer.create(getPlanet("unknown", 0)).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with multiple films', () => {
  const tree = renderer.create(getPlanet("9000000000", 10)).toJSON();
  expect(tree).toMatchSnapshot();
});