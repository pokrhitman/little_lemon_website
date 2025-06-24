/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Button,
  Heading,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login({ onLogin }) {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const auth = getAuth(app);

  // Formik + Yup Logic
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email address is required.'),
      password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setErrorMsg('');
      setSuccessMsg('');
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          setSuccessMsg('Login successful! Redirecting...');
          if (onLogin) {
            onLogin({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: userCredential.user.displayName,
            });
          }
          resetForm();
          setSubmitting(false);
          setTimeout(() => {
            setSuccessMsg('');
            navigate('/account');
          }, 1500);
        })
        .catch(error => {
          setErrorMsg(
            error.message.replace('Firebase:', '').replace('auth/', '').replace(/-/g, ' ')
          );
        });
    },
  });

  // Focus first invalid field on submit for keyboard users
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstErrorKey = Object.keys(formik.errors)[0];
      const errorElem = document.getElementByName(firstErrorKey)[0];
      if (errorElem) errorElem.focus();
    }
    // Reset succcessMsg when users starts typing again
    if (formik.isValidating || formik.isSubmitting) setSuccessMsg('');
    if (formik.isValidating || formik.isSubmitting) setErrorMsg('');
  }, [formik.errors, formik.isSubmitting, formik.isValidating]);

  return (
    <Flex flex="1" bg="brand.50" align="center" justify="center" minH="80vh">
      <Box maxW="400px" w="100%" p={8} bg="brand.700" borderRadius="xl" boxShadow="lg">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="lg" textAlign="center" color="brand.100">
            Log In to Little Lemon
          </Heading>

          {/* ARIA-live region for a11y success message */}
          <Box
            role="status"
            aria-live="polite"
            tabIndex={-1}
            ref={formRef}
            style={{ outline: 'none' }}
            mb={successMsg ? 2 : 0}
          >
            {successMsg && (
              <Text color="green.200" fontWeight="bold">
                {successMsg}
              </Text>
            )}
          </Box>
          {/* Error Message */}
          {errorMsg && (
            <Box role="alert" aria-live="assertive" mb={2}>
              <Text color="red.200" fontWeight="bold">
                {errorMsg}
              </Text>
            </Box>
          )}

          <form onSubmit={formik.handleSubmit} noValidate>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email} isRequired>
                <FormLabel htmlFor="email" color="brand.100" fontWeight="bold">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="Please enter your email"
                  {...formik.getFieldProps('email')}
                  bg="white"
                  color="brand.900"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.password && !!formik.errors.password}
                isRequired
              >
                <FormLabel htmlFor="password" fontWeight="bold" color="brand.100">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Please enter your password"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('password')}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                bg="brand.100"
                color="black"
                border="2px solid black"
                _hover={{ bg: 'brand.50', color: 'black', border: '2px solid black' }}
                colorScheme="yellow"
                width="full"
                fontSize="lg"
                isLoading={formik.isSubmitting}
                aria-busy={formik.isSubmitting}
                isDisabled={!formik.isValid || !formik.dirty}
                mt={2}
              >
                Log In
              </Button>
            </VStack>
          </form>

          <Text pt={2} textAlign="center" fontSize="md" fontWeight="bold" color="whiteAlpha.800">
            Don't have an account?{' '}
            <ChakraLink
              as={RouterLink}
              to="/register"
              color="brand.100"
              fontWeight="bold"
              aria-label="Sign up"
              _hover={{ textDecoration: 'underline', color: 'brand.50' }}
            >
              Sign up here!
            </ChakraLink>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
