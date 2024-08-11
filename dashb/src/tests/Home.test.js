import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import { HomeProvider } from '../context/HomeContext';

test('renders Home component and handles navigation', () => {
  render(
    <HomeProvider>
      <Home />
    </HomeProvider>
  );

  expect(screen.getByText(/Select a stack/i)).toBeInTheDocument();
});
