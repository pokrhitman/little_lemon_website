/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import {
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
        setErrorMsg('Please enter bot email and password.');
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
    <Box as="main" py={10} px={[2, 6]} id="main-content" minH="100vH" bg="gray.50">
      <VStack
        spacing={8}
        align="center"
        maxW="420px"
        mx="auto"
        p={8}
        boxShadow="md"
        borderRadius="xl"
        bg="white"
      >
        <Heading as="h1" size="lg">
          Log In to Little Lemon
        </Heading>

        {/* ARIA-live region for a11y success message */}
        <Box
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={formRef}
          style={{ outline: 'none' }}
          mb={successMsg ? 4 : 0}
        >
          {successMsg && (
            <Text color="green.500" fontWeight="bold">
              {successMsg}
            </Text>
          )}
        </Box>
        {/* Error Message */}
        {errorMsg && (
          <Box role="alert" aria-live="assertive" mb={2}>
            <Text color="red.500" fontWeight="bold">
              {errorMsg}
            </Text>
          </Box>
        )}

        <form onSubmit={formik.handleSubmit} noValidate style={{ width: '100%' }}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={formik.touched.email && !!formik.errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.password && !!formik.errors.password} isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                {...formik.getFieldProps('password')}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
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

        <Box pt={2} textAlign="center" w="full">
          <Text as="span" fontSize="md">
            Don't have an account?{' '}
            <Link
              href="#"
              color="yellow.600"
              fontWeight="bold"
              aria-label="Sign up"
              tabIndex={0}
              _hover={{ textDecoration: 'underline' }}
            >
              Sign up here
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AuthPage;
