import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Current floor display is on page', () => {
  render(<App />);
  const currentFloorDisplay = screen.getByText(/current floor/i);
  expect(currentFloorDisplay).toBeInTheDocument();
});

test('Current floor display is on page', () => {
  render(<App />);
  const currentFloorDisplay = screen.getByText(/current floor/i);
  expect(currentFloorDisplay).toBeInTheDocument();
});
