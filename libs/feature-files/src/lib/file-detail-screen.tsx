import {
  AspectRatio,
  Box,
  Button,
  Divider,
  DownloadIconSolid,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  XIconOutline,
} from '@nasa-search/orion';
import { format } from 'date-fns';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { NasaFile, NasaFileLabel } from './file-card';

/* eslint-disable-next-line */
export interface FileDetailScreenProps {}

export function FileDetailScreen(props: FileDetailScreenProps) {
  const navigate = useNavigate();

  const [fetchStatus, setFetchStatus] = React.useState<
    'idle' | 'loading' | 'done'
  >('idle');
  // const [file, setFile] = React.useState<NasaFile>();
  const file: NasaFile = {
    id: 'apollo',
    name: 'Apollo taking off',
    src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
    timestamp: '2021-04-21T00:00:00Z',
    label: NasaFileLabel.PHOTO,
  };
  const createdAt = format(new Date(file.timestamp), 'MMMM d, yyyy');
  const createdBy = 'NASA';
  const description = 'description text';

  return (
    <Stack spacing={8}>
      {/* Header */}
      <HStack px={8} borderBottomWidth="1px">
        <HStack flex={1}>
          <Stack spacing={0} flex={1}>
            <Heading fontWeight="medium" fontSize="sm">
              {file.name}
            </Heading>
            <Text fontWeight="medium" fontSize="sm" color="gray.300">
              {createdAt}
            </Text>
          </Stack>
        </HStack>
        <Flex direction="row">
          <Button
            alignSelf="center"
            variant="primary"
            leadingIcon={<DownloadIconSolid />}
          >
            Download
          </Button>
          <Flex align="center" borderLeftWidth="1px" ml={8} h={16}>
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
              aria-label="Close"
              variant="ghost"
              isRound={true}
              icon={<XIconOutline boxSize={6} />}
              size="sm"
              boxSize={8}
              p={1}
              ml={6}
            >
              Close
            </IconButton>
          </Flex>
        </Flex>
      </HStack>
      {/* Content */}
      <Box w="full" px={8}>
        <Stack spacing={6} maxW="4xl" mx="auto">
          <AspectRatio rounded="lg" overflow="hidden" w="full" ratio={10 / 7}>
            <Image
              src={file.src}
              alt="Filename"
              boxSize="full"
              objectFit="cover"
            />
          </AspectRatio>
          <Stack spacing={2}>
            <Heading fontSize="md" fontWeight="medium">
              Information
            </Heading>
            <Box as="dl">
              <Divider />
              <HStack
                justify="space-between"
                fontSize="sm"
                fontWeight="medium"
                py={3}
              >
                <Text as="dt" variant="supporting">
                  Created by
                </Text>
                <Box as="dd">{createdBy}</Box>
              </HStack>
              <Divider />
              <HStack
                justify="space-between"
                fontSize="sm"
                fontWeight="medium"
                py={3}
              >
                <Text as="dt" variant="supporting">
                  Date created
                </Text>
                <Box as="dd">{createdAt}</Box>
              </HStack>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Heading as="h3" fontSize="md" fontWeight="medium">
              Description
            </Heading>
            <Text fontSize="sm">{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
