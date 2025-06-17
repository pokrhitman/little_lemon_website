import React from 'react';
import { Box, VStack, Heading, Text, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import QuoteCard from '../components/QuoteCard';

// Accessibility notes:
// - <main> with id is the main landmark for users and bots
// - <h1> is the main heading (one per page)
// - Logo uses alt for branding (screen readers/ AI agents)

function Home() {
  return (
    <Box
      as="main"
      id="main-content"
      tabIndex={-1}
      minH="100vH"
      bg="brand.50"
      py={{ base: 8, md: 16 }}
      px={{ base: 8, md: 0 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={10} align="center" w="100%" maxW="2xl">
        <Box as="header" display="flex" flexDirection="column" alignItems="center">
          <Image
            src={logo}
            alt="Little Lemon Logo"
            boxSize={{ base: '80px', md: '120px' }}
            mb={4}
            borderRadius="full"
            shadow="md"
            bg="white"
            p={2}
          />
          <Heading
            as="h1"
            size="2xl"
            color="brand.700"
            mb={2}
            fontFamily="heading"
            textAlign="center"
          >
            Welcome to Little Lemon
          </Heading>
        </Box>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color="brand.900"
          textAlign="center"
          lineHeight="1.6"
        >
          Little Lemon is a charming neighborhood bistro that serves simple food and classic
          cocktails in a lively but casual environment.
          <br />
          We would love to hear mor about your experience with us!
        </Text>
        <QuoteCard />
      </VStack>
    </Box>
  );
}

export default Home;
