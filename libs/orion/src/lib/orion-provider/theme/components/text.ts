import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export const Text = {
  variants: {
    supporting: (props: Dict) => ({
      color: mode('gray.500', 'gray.400')(props),
    }),
  },
};
