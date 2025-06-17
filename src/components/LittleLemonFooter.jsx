import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function LittleLemonFooter() {
  return (
    <Box as="footer" role="contentinfo" bg="brand.800" w="100%">
      <Flex justify="center" align="center" minH="56px" px={[4, 8]} color="brand.100">
        <Text fontSize="sm" textAlign="center">
          All rights reserved by Little Lemon, 2025
        </Text>
      </Flex>
    </Box>
  );
}

export default LittleLemonFooter;
