import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export const Button = {
  baseStyle: {
    fontWeight: 'medium',
    boxShadow: 'sm',
  },
  sizes: {
    xs: {
      px: '.625rem', // This would be 2.5 in the size scale
      py: '.375rem', // This would be 1.5 in the size scale
      height: 'auto',
      lineHeight: 4,
      border: '1px solid transparent',
    },
    sm: {
      px: '3',
      py: '2',
      height: 'auto',
      lineHeight: 4,
      border: '1px solid transparent',
    },
    md: {
      px: '4',
      py: '2',
      height: 'auto',
      fontSize: 'sm',
      lineHeight: 5,
      border: '1px solid transparent',
    },
    lg: {
      px: '4',
      py: '2',
      height: 'auto',
      fontSize: 'md',
      lineHeight: 6,
      border: '1px solid transparent',
    },
  },
  variants: {
    primary: (props: Dict) => ({
      bg: mode('indigo.600', 'indigo.200')(props),
      color: mode('white', 'indigo.800')(props),
      _hover: {
        bg: mode('indigo.700', 'indigo.300')(props),
        _disabled: {
          bg: mode('indigo.600', 'indigo.200')(props),
        },
      },
      _active: {
        bg: mode('indigo.800', 'indigo.400')(props),
      },
      _focus: {
        ring: '2px',
        ringColor: 'indigo.500',
        ringOffset: '2px',
        ringOffsetColor: mode('white', 'gray.800')(props),
      },
      _disabled: {
        bg: mode('indigo.600', 'indigo.200')(props),
      },
    }),
    secondary: (props: Dict) => ({
      bg: mode('white', 'gray.800')(props),
      color: mode('gray.700', 'white')(props),
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      '& .chakra-button__icon': {
        color: 'gray.400',
      },
      _hover: {
        bg: mode('gray.50', 'gray.600')(props),
        _disabled: {
          bg: mode('white', 'gray.800')(props),
        },
      },
      _disabled: {
        bg: mode('white', 'gray.800')(props),
      },
      _active: {
        bg: mode('gray.200', 'gray.500')(props),
      },
      _focus: {
        ring: '2px',
        ringColor: mode('indigo.500', 'indigo.200')(props),
        ringOffset: '2px',
        ringOffsetColor: mode('white', 'gray.800')(props),
      },
    }),
    link: (props: Dict) => ({
      color: mode('indigo.600', 'indigo.200')(props),
      boxShadow: 'none',
      _focus: {
        ring: '2px',
        ringColor: mode('indigo.500', 'indigo.200')(props),
        ringOffset: '2px',
        ringOffsetColor: mode('white', 'gray.800')(props),
      },
    }),
  },
};