import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  useBreakpointValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import storeItemsToDisplay from '../data/storeData';

const Store = () => {
  //Responsive columns for cards
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box as="main" px={[2, 6]} py={[4, 8]} id="main-content">
      <VisuallyHidden>
        <Heading as="h1">Store - Little Lemon Restaurand</Heading>
      </VisuallyHidden>

      <Box maxW="7xl" mx="auto">
        {storeItemsToDisplay.map(section => (
          <Box as="section" key={section.title} mb={12}>
            <Heading as="h2" size="lg" mb={6}>
              {section.title}
            </Heading>
            <SimpleGrid columnds={gridColumns} spacing={8} aria-label={`${section.title} products`}>
              {section.data.map(item => (
                <Box
                  key={item.name}
                  bg="brand.100"
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  transition="box-shadow 0.2s"
                  _hover={{ boxShadow: 'xl', cursor: 'pointer', bg: 'brand.50' }}
                >
                  <Image
                    src={import.meta.env.BASE_URL + item.img}
                    alt={item.name}
                    borderRadius="lg"
                    objectFit="cover"
                    boxSize="140px"
                    mb={4}
                  />
                  <VStack spacing={2} align="center">
                    <Heading as="h3" size="md">
                      {item.name}
                    </Heading>
                    <Text fontWeight="bold" color="yellow.700">
                      {item.price}
                    </Text>
                    <Text fontSize="sm" color="gray.700" textAlign="center">
                      {item.description}
                    </Text>
                    {item.url ? (
                      <Button
                        as="a"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="yellow"
                        variant="solid"
                        size="sm"
                        mt={2}
                      >
                        Buy Now
                      </Button>
                    ) : (
                      <Button colorScheme="gray" variant="outline" size="sm" mt={2} isDisabled>
                        Coming Soon!
                      </Button>
                    )}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Store;
