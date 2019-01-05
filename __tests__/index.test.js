/* eslint-env jest */

import React from 'react';
import { render } from 'react-testing-library';

import App from '../src/pages';

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to next.js!')).not.toBeNull();
  });
});

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
