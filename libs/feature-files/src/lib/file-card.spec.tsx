import { render, screen } from '@nasa-search/shared-testing';

import { FileCard, NasaFile, NasaFileLabel } from './file-card';

const file: NasaFile = {
  id: 'apollo',
  name: 'Apollo taking off',
  src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
  timestamp: '2021-04-21T00:00:00Z',
  label: NasaFileLabel.PHOTO,
};

describe('FileCard', () => {
  it('renders the file details', () => {
    // This test will break randomly because it depends on the system time.
    // We'll have to stub the current date using jest, or pass it as a prop.
    // We could check that there's a string value, but that doesn't provide much value.
    // We can fake the system time like this:
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2021-04-22T00:00:00Z').getTime());

    render(<FileCard file={file} />);

    expect(screen.getByText('Apollo taking off')).toBeInTheDocument();
    expect(screen.getByText('1 day ago')).toBeInTheDocument();
    expect(screen.getByText('PHOTO')).toBeInTheDocument();
  });

  it('renders a link for users to view the file', () => {
    render(<FileCard file={file} />);

    expect(screen.getByRole('link', { name: 'Filename' })).toHaveAttribute(
      'href',
      '/files/apollo'
    );
  });
});
