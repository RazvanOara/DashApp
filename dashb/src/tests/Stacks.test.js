// src/tests/Stacks.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Stacks from '../components/Stacks';
import '@testing-library/jest-dom'; 

const mockOnStackClick = jest.fn();

test('renders Stacks component and handles interactions', async () => {
  // Render the Stacks component
  render(<Stacks onStackClick={mockOnStackClick} />);

  // Check if the "Select a stack" heading is rendered
  expect(screen.getByText(/Select a stack/i)).toBeInTheDocument();

  // Check if the stack items are rendered
  expect(screen.getByText(/Optimism Bedrock/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn more/i)).toBeInTheDocument();

  // Simulate clicking the stack item
  fireEvent.click(screen.getByText(/Optimism Bedrock/i));

  // Check if sessionStorage has the chosen stack
  expect(sessionStorage.getItem('stackChosen')).toBe('Optimism Bedrock');

  // Check if the onStackClick callback was called
  expect(mockOnStackClick).toHaveBeenCalledTimes(1);


  const link = screen.getByText(/Learn more/i);
  fireEvent.click(link);

  expect(link).toHaveAttribute('href', 'https://docs.optimism.io/stack/protocol/rollup/overview');

  // verify the animation class
  await waitFor(() => {
    expect(screen.getByText(/Select a stack/i).parentElement).toHaveClass('slide-in');
  });
});
