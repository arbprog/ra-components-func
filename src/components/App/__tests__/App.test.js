import { render, screen } from '@testing-library/react';
import App from '../js/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tiger of Sweden/i);
  expect(linkElement).toBeInTheDocument();
});
