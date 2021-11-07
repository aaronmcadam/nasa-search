import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { OrionProvider } from '@nasa-search/orion';

import { App } from './app/app';

ReactDOM.render(
  <StrictMode>
    <OrionProvider>
      <App />
    </OrionProvider>
  </StrictMode>,
  document.getElementById('root')
);
