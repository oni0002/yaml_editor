import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, VStack, Text, Icon, Box } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

function ImportScreen({ onFileAccepted }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onFileAccepted(acceptedFiles[0]),
    accept: '.yml, .yaml'
  });

  return (
    <VStack spacing={8} justify="center" align="center" height="100%">
      <Text fontSize="xl" fontWeight="bold" mb={4}>YAML ファイルをインポート</Text>
      <Center
        p={6}
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="md"
        cursor="pointer"
        bg="gray.50"
        _hover={{ borderColor: 'teal.500', bg: 'teal.50' }}
        {...getRootProps()}
      >
        <Box textAlign="center">
          <Icon as={AttachmentIcon} w={10} h={10} color="teal.500" mb={3} />
          <input {...getInputProps()} />
          <Text color="gray.500" fontWeight="bold">ファイルをドロップ</Text>
          <Text color="gray.500">または</Text>
          <Text color="teal.500" fontWeight="bold">ファイルを選択してアップロード</Text>
        </Box>
      </Center>
    </VStack>
  );
}

export default ImportScreen;