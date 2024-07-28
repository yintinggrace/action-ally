import { render, screen } from '@testing-library/react';
import Home from './Home';
import logo from '../../images/action-ally.svg';

describe('Home Component', () => {
  it('renders Main component with correct image and slogan', () => {
    render(<Home />);

    const imageElement = screen.getByAltText(/action ally/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', logo);

    expect(screen.getByText(/your path to productivity starts here/i)).toBeInTheDocument();
  });
});
