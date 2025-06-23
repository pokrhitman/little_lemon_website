import React, { useState } from 'react';
import menuItemsToDisplay from '../data/menuData';
import useDevice from '../hooks/useDevice';
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
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

function Menu() {
  const { isMobile } = useDevice();
  const [popupItem, setPopupItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Responsive columns
  const gridColumns = useBreakpointValue({ base: 1, md: 3 });

  // For keyboard accessibility:
  const handleCardKey = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPopupItem(item);
      onOpen();
    }
  };

  // Open popup
  const handleOpenPopup = item => {
    setPopupItem(item);
    onOpen();
  };

  // Close popup
  const handleClosePopup = () => {
    setPopupItem(null);
    onClose();
  };

  return (
    <Box as="main" px={[2, 6]} py={[4, 8]} id="main-content">
      <VisuallyHidden>
        <Heading as="h1">Menu - Little Lemon Restaurant</Heading>
      </VisuallyHidden>

      <Box maxW="7xl" mx="auto">
        {menuItemsToDisplay.map(section => (
          <Box as="section" key={section.title} mb={14}>
            <Heading as="h2" size="lg" mb={2}>
              {section.title}
            </Heading>
            <Text color="gray.600" fontSize="md" mb={4}>
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
                  bg="brand.500"
                  borderRadius="xl"
                  boxShadow="md"
                  p={5}
                  position="relative"
                  maxW="280px"
                  minW="220px"
                  w="100%"
                  transition="box-shadow 0.2s"
                  _hover={{ boxShadwow: 'xl', cursor: 'pointer', bg: 'yellow.200' }}
                  _focus={{ outline: '2px solid', outlineColor: 'brand.500' }}
                  onClick={() => handleOpenPopup(item)}
                  onKeyDown={e => handleCardKey(item, e)}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  {/* Info icon fixed in upper right */}
                  <InfoOutlineIcon
                    color="gray.400"
                    boxSize={5}
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
        <ModalContent aria-label={popupItem ? `Nutritional infor for ${popupItem.name}` : ''}>
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
                  maxH="180px"
                  borderRadius="lg"
                  objectFit="cover"
                />
                <Box mb={2}>
                  <Text fontWeight="medium">{popupItem.nutrition.ingredients}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {popupItem.nutrition.calories} kcal
                  </Text>
                </Box>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Menu;
