/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useDevice from '../hooks/useDevice';
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  HStack,
  Radio,
  Textarea,
  Text,
} from '@chakra-ui/react';

const heardFromOptions = [
  { value: 'social-media', label: 'Social Media' },
  { value: 'friends', label: 'Friends' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'other', label: 'Other' },
];

const Feedback = () => {
  const { isMobile } = useDevice();
  const formRef = useRef(null);
  const [successMsg, setSuccessMsg] = React.useState('');

  // Formik + Yup setup

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      heardFrom: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name.'),
      lastName: Yup.string().required('Please enter your last name.'),
      email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Email address is required.'),
      message: Yup.string().required('Please enter your message.').max(250, 'Max 250 characters.'),
      heardFrom: Yup.string().required('Please select how you heard about us.'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSuccessMsg(
        `Thank you for your feedback${values.firstName ? `, ${values.firstName}` : ''}!`
      );
      resetForm();
      setSubmitting(false);
      setTimeout(() => setSuccessMsg(''), 4000);
      // For screen readers: focus the ARIA live region on mobile
      if (isMobile && formRef.current) {
        formRef.current.focus();
      }
    },
  });

  // Focus first invalid field on submit for keyboard users
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstErrorKey = Object.keys(formik.errors)[0];
      const errorElem = document.getElementByName(firstErrorKey)[0];
      if (errorElem) errorElem.focus();
    }
    // Reset successMsg when user starts typing again
    if (formik.isValidating || formik.isSubmitting) setSuccessMsg('');
  }, [formik.errors, formik.isSubmitting, formik.isValidating]);

  return (
    <Box py={10} px={[2, 6]} minH="80vh" bg="brand.50">
      <VStack spacing={8} align="flex-start" maxW="600px" mx="auto">
        <Heading as="h1" size="lg" color="brand.700">
          We'd love your feedback!
        </Heading>
        <Text as="h2" fontSize="lg" fontWeight="medium" color="brand.900" mb={2}>
          How was your experience at Little Lemon? Drop a comment below and help us keep improving.
        </Text>

        <Box p={8} rounded="xl" w="100%" bg="brand.700" boxShadow="lg">
          {/* ARIA-live region for a11y success message */}
          <Box
            role="status"
            arial-live="polite"
            tabIndex={-1}
            ref={formRef}
            style={{ outline: 'none ' }}
            mb={successMsg ? 4 : 0}
          >
            {successMsg && (
              <Text color="brand.100" fontWeight="bold">
                {successMsg}
              </Text>
            )}
          </Box>

          <form onSubmit={formik.handleSubmit} noValidate>
            <VStack spacing={5} align="stretch">
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                isRequired
              >
                <FormLabel htmlFor="firstName" color="brand.100" fontWeight="bold">
                  First Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Please enter your first name."
                  autoComplete="given-name"
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
                <FormLabel htmlFor="firstName" color="brand.100" fontWeight="bold">
                  Last Name
                </FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Please enter your last name."
                  autoComplete="family-name"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('lastName')}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && !!formik.errors.email} isRequired>
                <FormLabel htmlFor="email" color="brand.100" fontWeight="bold">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Please enter your email address."
                  autoComplete="email"
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.message && !!formik.errors.message} isRequired>
                <FormLabel htmlFor="message" color="brand.100" fontWeight="bold">
                  Your Message
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please leave your feedback here."
                  maxLength={250}
                  rows={3}
                  bg="white"
                  color="brand.900"
                  {...formik.getFieldProps('message')}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.heardFrom && !!formik.errors.message}
                isRequired
              >
                <FormLabel as="legend" htmlFor="heardFrom" color="brand.100" fontWeight="bold">
                  How did you hear about us?
                </FormLabel>
                <RadioGroup
                  id="heardFrom"
                  name="heardFrom"
                  value={formik.values.heardFrom}
                  onChange={val => formik.setFieldValue('heardFrom', val)}
                  onBlur={(() => formik.setFieldTouched('heardFrom'), true)}
                >
                  <HStack spacing={8}>
                    {heardFromOptions.map(opt => (
                      <Radio key={opt.value} value={opt.value}>
                        <Text color="whiteAlpha.800"> {opt.label} </Text>
                      </Radio>
                    ))}
                  </HStack>
                </RadioGroup>
                <FormErrorMessage>{formik.errors.heardFrom}</FormErrorMessage>
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
                mt={4}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default Feedback;
