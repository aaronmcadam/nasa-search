import { render, screen } from '@nasa-search/shared-testing';

import { Button } from './button';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>Test</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Test');
  });
});
