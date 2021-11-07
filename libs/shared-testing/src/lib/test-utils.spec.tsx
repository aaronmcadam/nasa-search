import { Box, Heading, Link } from '@nasa-search/orion';
import { Link as ReactRouterLink } from 'react-router-dom';
import { render, screen } from './test-utils';

function ComponentRequiringProviders() {
  return (
    <Box>
      <Heading>NASA Search</Heading>
      <Link as={ReactRouterLink} to="/testing">
        Test link
      </Link>
    </Box>
  );
}

describe('Test utils', () => {
  test('wraps components in the design system and router providers we need to render', () => {
    render(<ComponentRequiringProviders />);

    expect(screen.getByRole('heading')).toHaveTextContent('NASA Search');
    expect(screen.getByRole('link', { name: 'Test link' })).toHaveAttribute(
      'href',
      '/testing'
    );
  });
});
