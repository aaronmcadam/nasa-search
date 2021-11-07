import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/provider';
import { theme } from './theme/theme';

/* eslint-disable-next-line */
export interface OrionProviderProps extends ChakraProviderProps {}

export function OrionProvider(props: OrionProviderProps) {
  return <ChakraProvider theme={theme} {...props} />;
}
