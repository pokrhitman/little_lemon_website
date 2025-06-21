import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, HStack, Button, Text } from '@chakra-ui/react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

function Navbar({ user, onLogout }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      bg="brand.700"
      color="brand.100"
      px={[4, 8]}
      py={3}
      align="center"
      justify="space-between"
      boxShadow="sm"
      w="100%"
    >
      <HStack spacing={4}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            fontWeight="bold"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Home
          </Button>
        </NavLink>

        <NavLink to="menu" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Menu
          </Button>
        </NavLink>

        <NavLink to="desserts" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Desserts
          </Button>
        </NavLink>

        <NavLink to="drinks" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Drinks
          </Button>
        </NavLink>

        <NavLink to="feedback" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Feedback
          </Button>
        </NavLink>

        <NavLink to="store" style={{ textDecoration: 'none' }}>
          <Button
            variant="link"
            color="brand.100"
            fontSize="lg"
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            Store
          </Button>
        </NavLink>
        {/* Auth links: conditionall rendered */}
        {user ? (
          <>
            <NavLink to="account" style={{ textDecoration: 'none' }}>
              <Button
                varian="link"
                color="brand.100"
                fontSize="lg"
                _hover={{ color: 'brand.500', textDecoration: 'underline' }}
              >
                Account
              </Button>
            </NavLink>
            {/* User greeting */}
            <Text as="span" color="brand.100" fontWeight="bold" ml={4}>
              {user.firstName
                ? `Welcome, ${user.firstName}!`
                : user.email
                  ? `Logged in as: ${user.email}`
                  : `Logged in`}
            </Text>

            <Button
              onClick={onLogout}
              colorScheme="yellow"
              variant="ghost"
              fontSize="lg"
              ml={2}
              color="brand.100"
              _hover={{ color: 'brand.500', bg: 'brand.50' }}
            >
              Log out
            </Button>
          </>
        ) : (
          <NavLink to="login" style={{ textDecoration: 'none' }}>
            <Button
              variant="link"
              color="brand.100"
              fontSize="lg"
              _hover={{ color: 'brand.500', textDecoration: 'underline' }}
            >
              Log In
            </Button>
          </NavLink>
        )}
      </HStack>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        fontSize="xl"
        color="brand.100"
        _hover={{ color: 'brand.500' }}
      />
    </Flex>
  );
}

Navbar.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
};

export default Navbar;
