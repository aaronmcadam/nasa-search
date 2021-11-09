import { render, screen } from '@nasa-search/shared-testing';

import { FileDetailScreen } from './file-detail-screen';

describe('FileDetailScreen', () => {
  it('renders', () => {
    render(<FileDetailScreen />);

    expect(screen.getByText('Download')).toBeInTheDocument();
  });
});
