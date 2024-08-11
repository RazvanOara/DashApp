// src/tests/Networks.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Networks from '../components/Networks';

const mockOnBack = jest.fn();
const mockOnNetworkClick = jest.fn();

test('renders Networks component and handles interactions', async () => {
  // Render the Networks component
  render(<Networks onBack={mockOnBack} onNetworkClick={mockOnNetworkClick} />);

  // Check if the "Select a Network" heading is rendered
  expect(screen.getByText(/Select a Network/i)).toBeInTheDocument();

  // Check if network items are rendered
  expect(screen.getByText(/Testnet/i)).toBeInTheDocument();
  expect(screen.getByText(/Mainnet/i)).toBeInTheDocument();

  // Simulate clicking the Testnet network item
  fireEvent.click(screen.getByText(/Testnet/i));

  // Check if sessionStorage has the chosen network
  expect(sessionStorage.getItem('networkChosen')).toBe('Testnet');

  // Check if the onNetworkClick callback was called
  expect(mockOnNetworkClick).toHaveBeenCalledTimes(1);

  // Simulate clicking the back button
  fireEvent.click(screen.getByText(/Back to Stacks/i));

  // Verify if the onBack callback was called
  expect(mockOnBack).toHaveBeenCalledTimes(1);

  //  animation class
  await waitFor(() => {
    expect(screen.getByText(/Select a Network/i).parentElement).toHaveClass('slide-in');
  });
});
