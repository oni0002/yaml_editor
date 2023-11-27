import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      bg="white"
      w="100%"
      p={4}
      color="gray.800"
      boxShadow="sm"
      zIndex="sticky" // 他の要素より上に表示されるようにz-indexを設定
    >
      <Heading as="h1" size="lg" textAlign="center">
        Yaml Editor
      </Heading>
    </Box>
  );
}

export default Header;