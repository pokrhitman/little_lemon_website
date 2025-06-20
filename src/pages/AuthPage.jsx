/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
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
  Link,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AuthPage = () => {
  const formRef = useRef(null);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

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
      // Fake Login: accept any non-empty, valid values
      if (!values.email.trim() || !values.password.trim()) {
        setErrorMsg('Please enter both email and password.');
        setSubmitting(false);
        return;
      }

      // You would replace with real Login / auth API here
      setSuccessMsg('Log in successful!');
      resetForm();
      setSubmitting(false);
      setTimeout(() => setSuccessMsg(''), 2000);

      // Focus success message for a11y
      if (formRef.current) formRef.current.focus();
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
            <Link
              href="/register/"
              color="brand.100"
              fontWeight="bold"
              aria-label="Sign up"
              _hover={{ textDecoration: 'underline', color: 'brand.50' }}
            >
              Sign up here!
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AuthPage;
