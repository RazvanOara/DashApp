import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders Contact component', () => {
  render(<Contact />);
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/If you have any questions, feel free to reach out to us at/i)).toBeInTheDocument();
});
