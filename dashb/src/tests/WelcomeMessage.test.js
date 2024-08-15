import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomeMessage from '../components/WelcomeMessage';

// Mock function for onClose callback
const mockOnClose = jest.fn();

test('renders WelcomeMessage component and handles interactions', () => {
  // Render the WelcomeMessage component with `isVisible` as true
  render(<WelcomeMessage onClose={mockOnClose} isVisible={true} />);

  // Check if the welcome message is visible
  expect(screen.getByText(/Welcome to Our Website!/i)).toBeInTheDocument();
  expect(screen.getByText(/We are glad to have you here. Click anywhere or close to dismiss this message./i)).toBeInTheDocument();

  // Simulate a click on the overlay
  fireEvent.click(screen.getByTestId('overlay'));

  // Check if the onClose callback was called
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test('does not render WelcomeMessage when isVisible is false', () => {
  // Render the WelcomeMessage component with `isVisible` as false
  render(<WelcomeMessage onClose={mockOnClose} isVisible={false} />);

  // Check if the welcome message is not visible
  expect(screen.queryByTestId('overlay')).toBeNull();
});
