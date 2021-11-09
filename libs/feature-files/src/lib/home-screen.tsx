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
  SimpleGrid,
} from '@nasa-search/orion';
import { FileCard, NasaFile, NasaFileLabel } from './file-card';
import * as React from 'react';
import { ApiResponse } from './api-schema';

/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [fetchStatus, setFetchStatus] = React.useState<
    'idle' | 'loading' | 'done'
  >('idle');
  const [files, setFiles] = React.useState<NasaFile[]>([]);

  async function searchFiles() {
    setFetchStatus('loading');

    try {
      // Possible refactoring using the repository pattern:
      // const fileRepo = new NasaFileRepository();
      // const files = await fileRepo.searchFor(searchTerm);

      // Search photos that were uploaded in 2021 and limit it to 1 page of results.
      const response = await fetch(
        `https://images-api.nasa.gov/search?&media_type=image&q=${searchTerm}&year_start=2021&page=1`
      );
      const data: ApiResponse = await response.json();
      const files: NasaFile[] = data.collection.items.map((item) => ({
        id: item.data[0].nasa_id,
        name: item.data[0].title,
        src: item.links[0].href,
        timestamp: item.data[0].date_created,
        label: NasaFileLabel.PHOTO,
      }));
      console.log('files', files);

      setFiles(files);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchStatus('done');
    }
  }

  return (
    <Stack maxW="7xl" mx="auto">
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
      <Stack align="center">
        <Stack spacing={4} align="flex-start" mt={12}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchFiles();
            }}
          >
            <InputGroup w="md" size="lg">
              <InputRightElement color="gray.300">
                <SearchIconSolid />
              </InputRightElement>
              <Input
                data-testid="input-search"
                placeholder="Search for a file..."
                rounded="full"
                defaultValue={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </form>
          <HStack spacing={6} pl={4}>
            <Checkbox colorScheme="pink" defaultIsChecked={true}>
              <Text fontWeight="medium">Photos</Text>
            </Checkbox>
            <Checkbox colorScheme="pink" isDisabled={true}>
              <Text fontWeight="medium">Videos</Text>
            </Checkbox>
            <Checkbox colorScheme="pink" isDisabled={true}>
              <Text fontWeight="medium">Audio</Text>
            </Checkbox>
          </HStack>
        </Stack>
      </Stack>
      <Box p={6}>
        {fetchStatus === 'loading' ? (
          <Text textAlign="center" fontWeight="medium" fontSize="xl">
            Searching...
          </Text>
        ) : null}
        {fetchStatus === 'done' && files.length === 0 ? (
          <Text textAlign="center" fontWeight="medium" fontSize="xl">
            Nothing was found!
          </Text>
        ) : null}
        {fetchStatus === 'done' && files.length > 0 ? (
          <>
            {/* File Gallery Header */}
            <Box pb={6} borderBottomWidth="1px">
              <Heading id="gallery-heading" fontSize="2xl" fontWeight="medium">
                Results for{' '}
                <Text as="span" fontWeight="bold">
                  {searchTerm}
                </Text>
              </Heading>
            </Box>
            {/* File Gallery Content */}
            <SimpleGrid
              as="ul"
              role="list"
              aria-labelledby="gallery-heading"
              columns={{
                base: 1,
                sm: 3,
                md: 4,
              }}
              spacingX={{ base: 4, sm: 6, xl: 8 }}
              spacingY={8}
              pb={16}
            >
              {files.map((file) => {
                return <FileCard key={file.id} file={file} />;
              })}
            </SimpleGrid>
          </>
        ) : null}
      </Box>
    </Stack>
  );
}
