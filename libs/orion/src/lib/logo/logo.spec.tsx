import { render, screen } from '@nasa-search/shared-testing';

import { Logo } from './logo';

describe('Logo', () => {
  it('renders', () => {
    render(<Logo />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
