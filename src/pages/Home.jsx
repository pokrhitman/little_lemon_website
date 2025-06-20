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
    <VStack spacing={10} align="center" w="100%" maxW="2xl" mx="auto" py={{ base: 8, md: 16 }}>
      {/* Logo and Heading */}
      <Box as="header" display="flex" flexDirection="column" alignItems="center">
        <Image
          src={logo}
          alt="Little Lemon Logo"
          boxSize={{ base: '120px', md: '160px' }}
          mb={6}
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
          Welcome to Little Lemon!
        </Heading>
      </Box>
      {/* Welcome message */}
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="md"
        color="brand.900"
        textAlign="center"
        lineHeight="1.6"
      >
        Little Lemon is a charming neighborhood bistro that serves simple Mediterranean food,
        delicious desserts and refreshing drinks in a lively but casual environment.
        <br />
        We are looking forward to your visit!
      </Text>
      <QuoteCard />
    </VStack>
  );
}

export default Home;
