import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders About component', () => {
  render(<About />);
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  expect(screen.getByText(/We are a company that values excellence and innovation./i)).toBeInTheDocument();
});
