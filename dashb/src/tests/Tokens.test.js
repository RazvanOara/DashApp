// src/tests/Tokens.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tokens from '../components/Tokens';
import '@testing-library/jest-dom'; 

const mockOnBack = jest.fn();
const mockOnTokenClick = jest.fn();

test('renders Tokens component and handles interactions', async () => {
  // Render the Tokens component
  render(<Tokens onBack={mockOnBack} onTokenClick={mockOnTokenClick} />);

  // Check if the "Select a Token" heading is rendered
  expect(screen.getByText(/Select a Token/i)).toBeInTheDocument();

  // Check if token items are rendered
  expect(screen.getByText(/Ethereum \(ETH\)/i)).toBeInTheDocument();
  expect(screen.getByText(/USDC/i)).toBeInTheDocument();
  expect(screen.getByText(/Wrapped BTC \(WBTC\)/i)).toBeInTheDocument();

  // Simulate clicking the Ethereum token item
  fireEvent.click(screen.getByText(/Ethereum \(ETH\)/i));

  // Check if sessionStorage has the chosen token
  expect(sessionStorage.getItem('tokenChosen')).toBe('Ethereum (ETH)');

  // Check if the onTokenClick callback was called
  expect(mockOnTokenClick).toHaveBeenCalledTimes(1);

  // Simulate clicking the back button
  fireEvent.click(screen.getByText(/Back to Networks/i));

  //  onBack callback was called
  expect(mockOnBack).toHaveBeenCalledTimes(1);

  //animation class
  await waitFor(() => {
    const container = screen.getByText(/Select a Token/i).closest('.tokens-container');
    expect(container).toHaveClass('slide-in');
  });
});
