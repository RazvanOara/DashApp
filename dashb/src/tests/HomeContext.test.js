// ../context/HomeContext.test.js

import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomeProvider, useHomeContext } from '../context/HomeContext';


// Create a test component to use the context
const TestComponent = () => {
  const { state, updateState } = useHomeContext();
  
  return (
    <div>
      <button onClick={() => updateState({ showStacks: !state.showStacks })}>
        Toggle Stacks
      </button>
      <div data-testid="showStacks">{state.showStacks ? 'Visible' : 'Hidden'}</div>
    </div>
  );
};

// Test suite
describe('HomeContext', () => {
  test('provides the correct initial state and allows state updates', () => {
    render(
      <HomeProvider>
        <TestComponent />
      </HomeProvider>
    );
    
    // Check initial state
    expect(screen.getByTestId('showStacks')).toHaveTextContent('Visible');

    // Toggle state
    act(() => {
      fireEvent.click(screen.getByText('Toggle Stacks'));
    });
    
    // Check updated state
    expect(screen.getByTestId('showStacks')).toHaveTextContent('Hidden');
  });
});
