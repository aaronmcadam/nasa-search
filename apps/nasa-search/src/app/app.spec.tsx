import { render, screen } from '@nasa-search/shared-testing';

import { App } from './app';

describe('App', () => {
  it('renders the app title', () => {
    render(<App />);

    expect(screen.getByText('NASA Search')).toBeInTheDocument();
  });
});
