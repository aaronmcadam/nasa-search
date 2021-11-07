import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export const Input = {
  variants: {
    outline: (props: Dict) => ({
      field: {
        bg: mode('white', 'gray.800')(props),
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
        _placeholder: {
          color: mode('gray.500', 'gray.400')(props),
        },
      },
    }),
  },
};
