import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
 // screen.debug();--> to see DOM while testing

  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});