import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyHeader from '../components/MyHeader';

test('renders MyHeader component', () => {
  render(
    <Router>
      <MyHeader />
    </Router>
  );
  expect(screen.getByText(/rollups idk/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
