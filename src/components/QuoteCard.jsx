import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import useFetchQuote from '../hooks/useFetchQuote';

function QuoteCard() {
  const { quote, getRandomQuote } = useFetchQuote();

  if (!quote) return null;

  return (
    <Box
      as="section"
      aria-live="polite"
      bg="brand.100"
      borderRadius="xl"
      boxShadow="lg"
      p={[4, 6]}
      w="100%"
      maxW="md"
      mx="auto"
      mt={8}
    >
      <VStack spacing={3} align="stretch">
        <Heading as="h2" size="md" color="brand.700" textAlign="center">
          Quote of the Day
        </Heading>
        <Box bg="white" borderRadius="md" p={4} boxShadow="sm">
          <Text as="blockquote" fontStyle="italic" fontSize="lg" color="brand.900" mb={2}>
            “{quote.content}”
          </Text>
          <Text as="footer" textAlign="right" color="brand.800" fontWeight="bold">
            - {quote.author}
          </Text>
        </Box>
        <Button colorScheme="brand" variant="outline" alignSelf="center" onClick={getRandomQuote}>
          Get New Quote
        </Button>
      </VStack>
    </Box>
  );
}

export default QuoteCard;
