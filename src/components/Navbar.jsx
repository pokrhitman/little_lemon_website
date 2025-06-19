import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, HStack, Button } from '@chakra-ui/react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      bg="brand.700"
      color="brand.700"
      px={[4, 8]}
      py={3}
      align="center"
      justify="space-between"
      boxShadow="sm"
      w="100%"
    >
      <HStack spacing={4}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Home
          </Button>
        </NavLink>

        <NavLink to="menu" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Menu
          </Button>
        </NavLink>

        <NavLink to="desserts" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Desserts
          </Button>
        </NavLink>

        <NavLink to="drinks" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Drinks
          </Button>
        </NavLink>

        <NavLink to="feedback" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Feedback
          </Button>
        </NavLink>

        <NavLink to="login" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Log In
          </Button>
        </NavLink>

        <NavLink to="store" style={{ textDecoration: 'none' }}>
          <Button variant="link" color="brand.100" _hover={{ color: 'brand.500' }}>
            Store
          </Button>
        </NavLink>
      </HStack>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        ml={4}
        fontSize="xl"
        color="brand.100"
        _hover={{ color: 'brand.500' }}
      />
    </Flex>
  );
}

export default Navbar;
