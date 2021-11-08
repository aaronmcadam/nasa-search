import { render, screen } from '@nasa-search/shared-testing';

import { FileCard } from './file-card';

describe('FileCard', () => {
  it('renders the file details', () => {
    render(<FileCard />);

    expect(screen.getByText('Orion Lift to Transporter')).toBeInTheDocument();
    expect(screen.getByText('185 MB')).toBeInTheDocument();
    // TODO: This test will break randomly because it depends on the system time.
    // We'll have to stub the current date using jest, or pass it as a prop.
    // We could check that there's a string value, but that doesn't provide much value.
    expect(screen.getByText('23 hours ago')).toBeInTheDocument();
    expect(screen.getByText('VIDEO')).toBeInTheDocument();
  });

  it('renders a link for users to view the file', () => {
    render(<FileCard />);

    expect(screen.getByRole('link', { name: 'Filename' })).toHaveAttribute(
      'href',
      '/files/file-1'
    );
  });
});
