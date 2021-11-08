import {
  Logo,
  Stack,
  Heading,
  Text,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  SearchIconSolid,
  HStack,
  Checkbox,
} from '@nasa-search/orion';

/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  return (
    <Stack>
      <Logo h={24} />
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize="6xl"
          fontWeight="extrabold"
          lineHeight={1}
          letterSpacing="tight"
          maxW="44rem"
          mx="auto"
        >
          <Box
            as="mark"
            bgGradient="linear(to-r, indigo.300, purple.300, pink.300)"
            bgClip="text"
          >
            Find something amazing
          </Box>{' '}
          in our vast file library!
        </Heading>
      </Box>
      <InputGroup maxW={{ md: '80' }} w="full" size="lg">
        <InputRightElement color="gray.300">
          <SearchIconSolid />
        </InputRightElement>
        <Input placeholder="Search for a file..." rounded="full" />
      </InputGroup>
      <HStack spacing={6} pl={4}>
        <Checkbox colorScheme="pink" defaultIsChecked={true}>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="pink" defaultIsChecked={true}>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="pink" defaultIsChecked={true}>
          Checkbox
        </Checkbox>
      </HStack>
      {/* Content Header */}
      <Box pb={6} borderBottomWidth="1px">
        <Heading fontSize="2xl" fontWeight="medium">
          Results for{' '}
          <Text as="span" fontWeight="bold">
            Orion
          </Text>
        </Heading>
      </Box>
      {/* File Gallery */}
      <Box mt={6}>
        <Text>Gallery</Text>
      </Box>
    </Stack>
  );
}
