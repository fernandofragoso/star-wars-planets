import React from 'react';
import ReactDOM from 'react-dom';
import ButtonNext from './ButtonNext';
import renderer from 'react-test-renderer';

let functionMock = jest.fn();

it('renders correctly', () => {
  const loading = false;
  const tree = renderer.create(<ButtonNext loading={loading} onButtonClick={functionMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly on loading state', () => {
  const loading = true;
  const tree = renderer.create(<ButtonNext loading={loading} onButtonClick={functionMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});