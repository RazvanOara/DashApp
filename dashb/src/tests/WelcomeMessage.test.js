import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomeMessage from './WelcomeMessage';

test('displays and closes the WelcomeMessage on clicking outside', () => {
  const TestComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div>
        <WelcomeMessage 
          onClose={() => setIsVisible(false)} 
          isVisible={isVisible} 
        />
        <button onClick={() => setIsVisible(true)}>Show Welcome Message</button>
      </div>
    );
  };

  render(<TestComponent />);

  // Check if the welcome message is displayed
  expect(screen.getByText(/welcome to our website!/i)).toBeInTheDocument();
  expect(screen.getByText(/we are glad to have you here/i)).toBeInTheDocument();

  // Click outside the welcome message (simulate by clicking the overlay)
  fireEvent.click(screen.getByRole('dialog'));

  // Check if the welcome message is no longer in the document
  expect(screen.queryByText(/welcome to our website!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/we are glad to have you here/i)).not.toBeInTheDocument();
});