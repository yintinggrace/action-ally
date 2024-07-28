import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image Component', () => {
  it('renders an img element with correct attributes', () => {
    const src = 'path/to/image.svg';
    const alt = 'Image Alt Text';
    const className = 'Custom Class';
    const title = 'Image Title';

    render(<Image src={src} alt={alt} className={className} title={title} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', src);
    expect(imgElement).toHaveAttribute('alt', alt);
    expect(imgElement).toHaveAttribute('class', className);
    expect(imgElement).toHaveAttribute('title', title);
  });
});
