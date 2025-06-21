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

const Register = () => {
  const formRef = useRef(null);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your last name.'),
      email: Yup.string()
        .email('Please enter a valid email adress.')
        .required('Email address is requited.'),
      password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
        .required('Please confirm your password.'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setErrorMsg('');
      setSuccessMsg('Account created sucessfully! You can now log in.');
      resetForm();
      setSubmitting(false);
      setTimeout(() => setSuccessMsg(''), 4000);
      if (formRef.current) formRef.current.focus();
    },
  });

  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstErrorKey = Object.keys(formik.errors)[0];
      const errorElem = document.getElementByName(firstErrorKey)[0];
      if (errorElem) errorElem.focus();
    }
    if (formik.isValidating || formik.isSubmitting) setSuccessMsg('');
    if (formik.isValidating || formik.isSubmitting) setErrorMsg('');
  }, [formik.errors, formik.isSubmitting, formik.isValidating]);

  return (
    <Flex flex="1" bg="brand.50" align="center" justify="center" minH="80vh">
      <Box maxW="400px" w="100%" p={8} bg="brand.700" borderRadius="xl" boxShadow="lg">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="lg" textAlign="center" color="brand.100">
            Create Your Account
          </Heading>
          <Text fontSize="md" color="brand.100" textAlign="center">
            Please fill out the form below to register for Little Lemon.
          </Text>
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
          {errorMsg && (
            <Box role="alert" aria-live="assertive" mb={2}>
              <Text color="red.200" fontWeight="bold">
                {errorMsg}
              </Text>
            </Box>
          )}

          <form onSubmit={formik.handleSubmit} noValidate>
            <VStack spacing={4} align="stretch">
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                isRequired
              >
                <FormLabel htmlFor="firstName" color="brand.100">
                  First Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Please enter your first name"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                isRequired
              >
                <FormLabel htmlFor="lastName" color="brand.100">
                  Last Name
                </FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Please enter your last name"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('lastName')}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>

              <FormControl isinvalid={formik.touched.email && !!formik.errors.email} isRequired>
                <FormLabel htmlFor="email" color="brand.100">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Please enter your email address"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.password && !!formik.errors.password}
                isRequired
              >
                <FormLabel htmlFor="password" color="brand">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('password')}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
                isRequired
              >
                <FormLabel htmlFor="confirmPassword" color="brand.100">
                  Please confirm your password.
                </FormLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('confirmPassword')}
                />
                <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                bg="brand.100"
                color="black"
                border="2px solid black"
                _hover={{ bg: 'brand.50', color: 'black', border: '2px solid black' }}
                width="full"
                fontSize="lg"
                isLoading={formik.isSubmitting}
                aria-busy={formik.isSubmitting}
                isDisabled={!formik.isValid || !formik.dirty}
                mt={2}
              >
                Register
              </Button>
            </VStack>
          </form>
          <Text pt={2} textAlign="center" fontSize="md">
            Already have an account?{''}
            <Link
              href="/login"
              color="brand.100"
              fontWeight="bold"
              aria-label="Log in"
              _hover={{ textDecoration: 'underline', color: 'brand.50' }}
            >
              Log in here
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Register;
