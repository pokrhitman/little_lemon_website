import React, { useState } from 'react';
import useDevice from '../hooks/useDevice';
import dessertsItemsToDisplay from '../data/dessertsData';
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

function Desserts() {
  const { isMobile } = useDevice();
  const [popupItem, setPopupItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Box
                  as="button"
                  key={item.name}
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={item.name}
                  textAlign="left"
                  bg="pink.50"
                  borderRadius="xl"
                  boxShadow="md"
                  p={5}
                  position="relative"
                  maxW="280px"
                  minW="220"
                  transition="box-shadow 0.2s, background 0.2s"
                  _hover={{ boxShadow: 'xl', cursor: 'pointer', bg: 'pink.100' }}
                  _focus={{ outline: '2px solid', outlineColor: 'pink.500' }}
                  onClick={() => handleOpenPopup(item)}
                  onKeyDown={e => handleCardKey(item, e)}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  {/* Info icon fixed in upper right */}
                  <InfoOutlineIcon
                    color="gray.400"
                    boxShadow={5}
                    position="absolute"
                    top="12px"
                    right="12px"
                    zIndex="1"
                  />
                  <Heading as="h3" size="md" mb={1} pr="32px" fontWeight="semibold">
                    {item.name}
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
