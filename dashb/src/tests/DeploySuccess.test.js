import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeploySuccess from '../components/DeploySuccess';

const mockOnClose = jest.fn();

test('renders DeploySuccess component and handles click', () => {
  render(<DeploySuccess onClose={mockOnClose} />);
  const message = screen.getByText(/Rollup deployed successfully!/i);
  expect(message).toBeInTheDocument();
  
  fireEvent.click(screen.getByText(/Rollup deployed successfully!/i).parentElement);
  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
