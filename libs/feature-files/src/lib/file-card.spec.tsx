import { render, screen } from '@nasa-search/shared-testing';

import { FileCard } from './file-card';

describe('FileCard', () => {
  it('renders the file details', () => {
    render(<FileCard />);

    expect(screen.getByText('Orion Lift to Transporter')).toBeInTheDocument();
    expect(screen.getByText('185 MB')).toBeInTheDocument();
    expect(screen.getByText('14 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('VIDEO')).toBeInTheDocument();
  });

  it('renders a link for users to view the file', () => {
    render(<FileCard />);

    expect(screen.getByRole('link', { name: 'Test link' })).toHaveAttribute(
      'href',
      '/testing'
    );
  });
});
