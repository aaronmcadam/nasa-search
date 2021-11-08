import { render, screen } from '@nasa-search/shared-testing';

import { HomeScreen } from './home-screen';

describe('HomeScreen', () => {
  it('renders', () => {
    render(<HomeScreen />);

    expect(screen.getByText('Find something amazing')).toBeInTheDocument();
  });
});
