import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const ItemCard = ({
  title,
  price,
  children,
  bg = 'brand.100',
  hoverBg = 'yellow.200',
  info = true,
  ...props
}) => (
  <Box
    position="relative"
    borderRadius="xl"
    boxShadow="md"
    p={5}
    maxW="280px"
    minW="220px"
    w="100%"
    bg={bg}
    transition="box-shadow 0.2s, background 0.2"
    _hover={{ boxShadow: 'xl', cursor: 'pointer', bg: hoverBg }}
    _focus={{ outline: '2px solid', outlineColor: 'brand.500' }}
    {...props}
  >
    {info && (
      <InfoOutlineIcon
        color="gray.400"
        boxSize={5}
        position="absolute"
        top="12px"
        right="12px"
        zIndex="1"
      />
    )}
    <Heading as="h3" size="md" mb={1} pr="32px" fontWeight="semibold">
      {title}
    </Heading>
    <Text fontWeight="bold">{price}</Text>
    {children}
  </Box>
);

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
  bg: PropTypes.string,
  hoverBg: PropTypes.string,
  info: PropTypes.bool,
};

export default ItemCard;
