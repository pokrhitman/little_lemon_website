import React, { useState } from 'react';
import dessertsItemsToDisplay from '../data/dessertsData';
import useDevice from '../hooks/useDevice';
import {
  Box,
  SimpleGrid,
  Heading,
  HStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VisuallyHidden,
  useBreakpointValue,
} from '@chakra-ui/react';
import ItemCard from '../components/ItemCard';

function Desserts() {
  const { isMobile } = useDevice();
  const [popupItem, setPopupItem] = useState(null);
  const { isOpen, onOpen, onClose } = useState(false);

  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  // For keyboard accessibility
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

  // Close popup on click elsewhere
  const handleClosePopup = () => {
    setPopupItem(null);
    onClose();
  };

  return (
    <Box as="main" px={[2, 6]} py={[4, 8]} id="main-content">
      <VisuallyHidden>
        <Heading as="h1">Desserts - Little Lemon Restaurant</Heading>
      </VisuallyHidden>

      <Box maxW="7xl" mx="auto">
        {dessertsItemsToDisplay.map(section => (
          <Box as="section" key={section.title} mb={14}>
            <Heading as="h2" size="lg" mb={2}>
              {section.title}
            </Heading>
            <Text color="gray.600" fontSize="md" mb={3}>
              Click on an item to see more details.
            </Text>
            <SimpleGrid columns={gridColumns} spacing={8} aria-label={`${section.title} items`}>
              {section.data.map(item => (
                <ItemCard
                  key={item.name}
                  title={item.name}
                  price={item.price}
                  bg="pink.50"
                  hoverBg="pink.100"
                  textColor="pink.600"
                  onClick={() => handleOpenPopup(item)}
                  oneKeyDown={e => handleCardKey(item, e)}
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={item.name}
                />
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
                  border="lg"
                  objectFit="cover"
                />
                <HStack justify="center" spacing={6}>
                  <Box>
                    <Text fontWeight="medium">Calories:</Text>
                    <Text>{popupItem.nutrition.calories} kcal</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="medium">Fat:</Text>
                    <Text>{popupItem.nutrition.fat} g</Text>
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

export default Desserts;
