import { extendTheme, withDefaultVariant } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { Button } from './components/button';
import { Input } from './components/input';
import { Select } from './components/select';
import { FormLabel } from './components/form-label';
import { Badge } from './components/badge';
import { Text } from './components/text';
import { Divider } from './components/divider';

const overrides = {
  breakpoints,
  colors,
  components: {
    Badge,
    Button,
    Divider,
    Input,
    FormLabel,
    Select,
    Text,
  },
  config: {
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: 'indigo.900',
      },
    },
  },
};

export const theme = extendTheme(
  overrides,
  withDefaultVariant({
    variant: 'secondary',
    components: ['Button'],
  })
);
