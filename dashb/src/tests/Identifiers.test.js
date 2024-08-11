// src/tests/Identifiers.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Identifiers from '../components/Identifiers';
import { useHomeContext } from '../context/HomeContext';

// Mock the context
jest.mock('../context/HomeContext', () => ({
  useHomeContext: jest.fn(),
}));

// Mock the DeploySuccess and FailMessage components
jest.mock('../components/DeploySuccess', () => ({ onClose }) => (
  <div>
    <p>Deploy Success Component</p>
    <button onClick={onClose}>Close</button>
  </div>
));

jest.mock('../components/FailMessage', () => ({ onClose }) => (
  <div>
    <p>Fail Message Component</p>
    <button onClick={onClose}>Close</button>
  </div>
));

// Mock the context update function
const mockUpdateState = jest.fn();

beforeEach(() => {
  useHomeContext.mockReturnValue({ updateState: mockUpdateState });
});

test('renders Identifiers component and handles input and button clicks', async () => {
  const mockOnBack = jest.fn();
  
  // Render the Identifiers component
  render(<Identifiers onBack={mockOnBack} />);

  // Check if the form labels and input fields are rendered
  expect(screen.getByLabelText(/Rollup Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Subdomain/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Chain ID/i)).toBeInTheDocument();
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Rollup Name/i), { target: { value: 'Test Rollup' } });
  fireEvent.change(screen.getByLabelText(/Subdomain/i), { target: { value: 'test-subdomain' } });
  fireEvent.change(screen.getByLabelText(/Chain ID/i), { target: { value: '1234' } });

  expect(screen.getByDisplayValue('Test Rollup')).toBeInTheDocument();
  expect(screen.getByDisplayValue('test-subdomain')).toBeInTheDocument();
  expect(screen.getByDisplayValue('1234')).toBeInTheDocument();

  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
    })
  );

  // Click the "Deploy new rollup" button
  fireEvent.click(screen.getByText(/Deploy new rollup/i));
  
  // Wait for the success message to appear
  await waitFor(() => {
    expect(screen.getByText(/Deploy Success Component/i)).toBeInTheDocument();
  });

  // Check if the success callback was called
  fireEvent.click(screen.getByText(/Close/i));
  expect(mockUpdateState).toHaveBeenCalledWith({
    showStacks: true,
    showNetworks: false,
    showTokens: false,
    showAvailabilityLayer: false,
    showIdentifiers: false,
  });

  // Check if session storage was cleared (mock local storage operations)
  expect(sessionStorage.getItem('rollupName')).toBeNull();
  expect(sessionStorage.getItem('subdomain')).toBeNull();
  expect(sessionStorage.getItem('chainId')).toBeNull();

  // Simulate a failure scenario
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false,
      statusText: 'Failed',
    })
  );

  // Click the "Deploy new rollup" button again
  fireEvent.click(screen.getByText(/Deploy new rollup/i));

  // Wait for the fail message to appear
  await waitFor(() => {
    expect(screen.getByText(/Fail Message Component/i)).toBeInTheDocument();
  });

  // Close the fail message
  fireEvent.click(screen.getByText(/Close/i));
  expect(screen.queryByText(/Fail Message Component/i)).not.toBeInTheDocument();

  // Click the "Back to Availability Layer" button
  fireEvent.click(screen.getByText(/Back to Availability Layer/i));
  
  // Verify if the back button callback was called
  expect(mockOnBack).toHaveBeenCalledTimes(1);
});
