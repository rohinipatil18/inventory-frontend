import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('full app rendering/navigating', () => {
  render(<App />)

  // verify page content for default route
  expect(screen.getByText(/Add Inventories/i)).toBeInTheDocument();
  expect(screen.getByText(/Update Inventories/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  // userEvent.click(screen.getByText(/Add Inventories/i));
  // expect(screen.getByText(/Add Item/i)).toBeInTheDocument();
})
