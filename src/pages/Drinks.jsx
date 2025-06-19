import React, { useState } from 'react';
import useDevice from '../hooks/useDevice';
import drinksItemsToDisplay from '../data/drinksData';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  VisuallyHidden,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

function Drinks() {
  const { isMobile } = useDevice();
  const [popupItem, setPopupItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Responsive columns for the grid
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  // For keyboard accessibility, optional:
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
      onOpen();
    }
  };

  const handleOpenPopup = item => {
    setPopupItem(item);
    onOpen();
  };

  // Close popup on click elsewhere (optional)
  const handleClosePopup = () => {
    setPopupItem(null);
    onClose();
  };

  return (
    <Box as="main" px={[2, 6]} py={[4, 8]} id="main-content">
      <VisuallyHidden>
        <Heading as="h1">Drinks - Little Lemon Restaurand</Heading>
      </VisuallyHidden>

      <Box maxW="7xl" mx="auto">
        {drinksItemsToDisplay.map(section => (
          <Box as="section" key={section.title} mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              {section.title}
            </Heading>
            <Text color="gray.600" fontSize="md" mb={4}>
              Click on an item to see more details.
            </Text>
            <SimpleGrid columns={gridColumns} spacing={6} aria-label={`$section.title} items`}>
              {section.data.map(item => (
                <Box
                  as="button"
                  key={item.name}
                  aria-haspopup="dialog"
                  aria-label={item.name}
                  textAlign="left"
                  bg="blue.50"
                  borderRadius="xl"
                  boxShadow="md"
                  p={4}
                  transition="box-shadow 0.2s"
                  _hover={{ boxShadow: 'xl', cursor: 'pointer', bg: 'blue.100' }}
                  _focus={{ outline: '2px solid', outlineColor: 'blue.500' }}
                  onClick={() => handleOpenPopup(item)}
                  onKeyDown={e => handleCardKey(item, e)}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Heading as="h3" size="md" mb={2} display="flex" alignItems="center">
                    {item.name}
                    <InfoOutlineIcon ml={2} color="gray.400" boxSize={4} />
                  </Heading>
                  <Text fontWeight="bold">{item.price}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Box>

      {/* Chakra Modal Popup */}
      <Modal
        isOpen={!!popupItem && isOpen}
        onClose={handleClosePopup}
        isCentered
        size={isMobile ? 'xs' : 'md'}
        motionPreset="scale"
        trapFocus
        closeOnEsc
        autoFocus
        returnFocusOnClose
      >
        <ModalOverlay />
        <ModalContent aria-label={popupItem ? `Nutrition info for ${popupItem.name}` : ''}>
          {popupItem && (
            <>
              <ModalHeader>
                {popupItem.name}
                <Text fontSize="md" color="gray.500" mt={2}>
                  {popupItem.price}
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6} textAlign="center">
                <Image
                  src={import.meta.env.BASE_URL + popupItem.img}
                  alt={popupItem.name}
                  mx="auto"
                  mb={4}
                  maxH="160px"
                  borderRadius="lg"
                  objectFit="cover"
                />
                <HStack justify="center" spacing={6}>
                  <Box>
                    <Text fontWeight="medium">Calories:</Text>
                    <Text>{popupItem.nutrition.calories} kcal</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="medium">Sugar:</Text>
                    <Text>{popupItem.nutrition.sugar} g</Text>
                  </Box>
                </HStack>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Drinks;
