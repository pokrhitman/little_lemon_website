import React, { useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Account({ user, onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Box maxW="600px" mx="auto" mt={10} p={8} bg="brand.50" borderRadius="xl" boxShadow="md">
      <Heading as="h1" size="lg" color="brand.700" mb={4}>
        Welcome, {user?.firstName || user?.email || 'User'}!
      </Heading>
      <Text fontSize="md" color="brand.900" mb={6}>
        This is your account area. You are logged in as: <b>{user.email}</b>
      </Text>
      {/* More content and features when necessary */}
      <Button
        bg="brand.100"
        color="black"
        border="2px solid black"
        _hover={{ bg: 'brand.700', color: 'brand.100', border: '2px solid black' }}
        onClick={onLogout}
      >
        Log out
      </Button>
    </Box>
  );
}

Account.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Account;
