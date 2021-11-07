import { OrionProvider } from '@nasa-search/orion';
import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * This gives us a place to set global wrapper components, such as providers
 * and other dependencies.
 */
function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <BrowserRouter>
      <OrionProvider>{children}</OrionProvider>
    </BrowserRouter>
  );
}

/**
 * This idea is borrowed from https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  render(ui, { wrapper: Providers, ...options });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
