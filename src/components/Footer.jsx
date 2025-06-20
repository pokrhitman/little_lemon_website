import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      bg="brand.700"
      color="brand.100"
      w="100%"
      py={4}
      px={[4, 8]}
      boxShadow="sm"
    >
      <Flex justify="center" align="center" minH="56px">
        <Text fontSize="md" fontWeight="medium" textAlign="center">
          All rights reserved by Little Lemon, 2025
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
