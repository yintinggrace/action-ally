import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders', () => {
    render(<App />);
    const appElement = screen.getByTestId(/App/i);
    expect(appElement).toBeInTheDocument();
  })
});
