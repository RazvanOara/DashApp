// src/tests/App.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Adjust the path if necessary

describe('App Component', () => {
  test('renders Home component at the root route', async () => {
    render(<App />);

    // Use a more flexible approach to find the Home component
    await waitFor(() => {
      // Adjust the text matcher according to the actual content in the Home component
      expect(screen.getByText((content, element) => 
        element.tagName.toLowerCase() === 'div' && content.includes('Home')
      )).toBeInTheDocument();
    });
  });

  test('navigates to Contact route and renders Contact component correctly', async () => {
    render(<App />);
    
    // Simulate route change to Contact
    window.history.pushState({}, 'Contact Page', '/contact');
    
    // Wait for Contact page content to be rendered
    await waitFor(() => {
      expect(screen.getByText('Contact Component')).toBeInTheDocument();
    });
  });
});
