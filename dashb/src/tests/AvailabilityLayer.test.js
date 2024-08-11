import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AvailabilityLayer from '../components/AvailabilityLayer';

const mockOnBack = jest.fn();
const mockOnAvailabilityLayerClick = jest.fn();

test('renders AvailabilityLayer component and handles click', () => {
  render(<AvailabilityLayer onBack={mockOnBack} onAvailabilityLayerClick={mockOnAvailabilityLayerClick} />);

  expect(screen.getByText(/Select an Availability Layer/i)).toBeInTheDocument();
  
  const ethereum = screen.getByText(/Ethereum/i);
  fireEvent.click(ethereum);

  expect(mockOnAvailabilityLayerClick).toHaveBeenCalledTimes(1);

  const backButton = screen.getByText(/Back to Tokens/i);
  fireEvent.click(backButton);

  expect(mockOnBack).toHaveBeenCalledTimes(1);
});
