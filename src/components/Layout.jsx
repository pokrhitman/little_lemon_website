import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { Box, Flex, Link } from '@chakra-ui/react';

// Accessibility: Skip Link allows keyboard/screen reader
// users to jump directly to main content.

const skipLinkStyles = {
  position: 'absolute',
  left: '0',
  top: '0',
  background: '#fffde7',
  color: '#283618',
  padding: '8px 16px',
  zIndex: '999',
  transform: 'translateY(-120%)',
  transition: 'transform 0.3s',
  _focus: { transform: 'translateY(0)' },
};

function Layout({ children }) {
  return (
    <Flex minH="100vh" direction="column" bg="brand.50">
      {/* Skip to Main Content link for accessibility */}
      <Link href="#main-content" sx={skipLinkStyles} _focus={{ transform: 'translateY(0)' }}>
        Skip to main content
      </Link>
      <Navbar />
      <Box as="main" id="main-content" flex="1" display="flex" flexDirection="column">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
