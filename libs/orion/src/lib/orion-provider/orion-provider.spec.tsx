import { render } from '@testing-library/react';

import { OrionProvider } from './orion-provider';

describe('OrionProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrionProvider />);
    expect(baseElement).toBeTruthy();
  });
});
