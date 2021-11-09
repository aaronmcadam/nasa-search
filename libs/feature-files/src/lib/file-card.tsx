import {
  AspectRatio,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Badge,
  Image,
} from '@nasa-search/orion';
import { formatDistanceToNowStrict } from 'date-fns';
import { Link as ReactRouterLink } from 'react-router-dom';

export enum NasaFileLabel {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
}

// We don't want to clash with the DOM's File object, so we introduce our own name.
export interface NasaFile {
  id: string;
  name: string;
  src: string;
  timestamp: string;
  label: NasaFileLabel;
}

/* eslint-disable-next-line */
export interface FileCardProps {
  file: NasaFile;
}

export function FileCard({ file }: FileCardProps) {
  const createdAt = formatDistanceToNowStrict(new Date(file.timestamp), {
    addSuffix: true,
  });

  return (
    <LinkBox as="article" role="group">
      <Stack spacing={2} align="flex-start">
        <AspectRatio rounded="lg" overflow="hidden" w="full" ratio={10 / 7}>
          <LinkOverlay as={ReactRouterLink} to={`/files/${file.id}`}>
            <Image
              src={file.src}
              alt="Filename"
              boxSize="full"
              objectFit="cover"
              transition="ease-out"
              transitionProperty="all"
              transitionDuration="normal"
              _groupHover={{
                transform: 'scale(1.1, 1.1)',
                opacity: 0.75,
              }}
            />
          </LinkOverlay>
        </AspectRatio>
        <Box>
          <Text
            data-testid="meta-filename"
            fontSize="sm"
            fontWeight="medium"
            wordBreak="break-all"
          >
            {file.name}
          </Text>
          <HStack spacing={1}>
            <Text
              data-testid="meta-created-at"
              variant="supporting"
              fontSize="sm"
              fontWeight="medium"
            >
              {createdAt}
            </Text>
          </HStack>
          <Box mt={1}>
            <Badge>{file.label}</Badge>
          </Box>
        </Box>
      </Stack>
    </LinkBox>
  );
}
