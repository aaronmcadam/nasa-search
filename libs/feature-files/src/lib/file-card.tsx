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

/* eslint-disable-next-line */
export interface FileCardProps {}

export function FileCard(props: FileCardProps) {
  const createdAt = formatDistanceToNowStrict(new Date(2021, 10, 8), {
    addSuffix: true,
  });

  const file = {
    id: 'file-1',
    name: 'Orion Lift to Transporter',
    size: '185 MB',
    createdAt,
    type: 'VIDEO',
  };

  return (
    <LinkBox as="article" role="group">
      <Stack spacing={2} align="flex-start">
        <AspectRatio rounded="lg" overflow="hidden" w="full" ratio={10 / 7}>
          <LinkOverlay as={ReactRouterLink} to={`/files/${file.id}`}>
            <Image
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80"
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
          <Text fontSize="sm" fontWeight="medium" wordBreak="break-all">
            {file.name}
          </Text>
          <HStack spacing={1}>
            <Text variant="supporting" fontSize="sm" fontWeight="medium">
              {file.size}
            </Text>
            <Text variant="supporting" fontSize="sm" fontWeight="medium">
              &middot;
            </Text>
            <Text variant="supporting" fontSize="sm" fontWeight="medium">
              {createdAt}
            </Text>
          </HStack>
          <Box mt={1}>
            <Badge>{file.type}</Badge>
          </Box>
        </Box>
      </Stack>
    </LinkBox>
  );
}
