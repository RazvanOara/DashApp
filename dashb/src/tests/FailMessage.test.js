import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FailMessage from '../components/FailMessage';

// Mock function for onClose callback
const mockOnClose = jest.fn();

test('renders FailMessage component and handles interactions', () => {
  // Render the FailMessage component
  render(<FailMessage onClose={mockOnClose} />);

  // Check if the fail message content is visible
  expect(screen.getByText(/Rollup deployment failed. ID or subdomain is not unique. Please choose a different one./i)).toBeInTheDocument();

  // Simulate a click on the overlay
  fireEvent.click(screen.getByTestId('fail-message-overlay'));

  // Check if the onClose callback was called
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test('does not call onClose if clicking inside the message', () => {
  // Render the FailMessage component
  render(<FailMessage onClose={mockOnClose} />);

  // Find the fail message overlay and the message content
  const overlay = screen.getByTestId('fail-message-overlay');
  const message = screen.getByText(/Rollup deployment failed. ID or subdomain is not unique. Please choose a different one./i);

  // Click inside the fail message (not on the overlay)
  fireEvent.click(message);

  // Ensure the onClose callback was not called
  expect(mockOnClose).not.toHaveBeenCalled();
});
