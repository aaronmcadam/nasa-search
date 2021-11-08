import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Flex,
  IconButton,
  MoonIconSolid,
  OrionProvider,
  SunIconSolid,
  useColorMode,
  useColorModeValue,
} from '../libs/orion/src';

function ColorModeToggleBar() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIconSolid, SunIconSolid);
  const nextMode = useColorModeValue('dark', 'light');

  return (
    <Flex justify="flex-end" p={4}>
      <IconButton
        boxSize={10}
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        rounded="full"
      />
    </Flex>
  );
}

function withProviders(StoryFn: Function) {
  return (
    <BrowserRouter>
      <OrionProvider>
        <ColorModeToggleBar />
        <StoryFn />
      </OrionProvider>
    </BrowserRouter>
  );
}

// Makes every story work with React Router and Orion
export const decorators = [withProviders];

export const parameters = {
  // Remove padding from the storybook so that we can see the layout as it would
  // normally be rendered.
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};
