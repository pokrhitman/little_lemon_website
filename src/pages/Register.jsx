import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase';
import PropTypes from 'prop-types';

// shadcn/ui components
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const registerSchema = z
  .object({
    firstName: z.string().min(1, 'Please enter your first name'),
    lastName: z.string().min(1, 'Please enter your last name'),
    email: z.string().email('Please enter a valid email adress.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export default function Register({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
    setFocus,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const formStatusRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth(app);

  // Focus first error field on submit
  const onError = errs => {
    const firstError = Object.keys(errs)[0];
    if (firstError) setFocus(firstError);
  };

  const onSubmit = async values => {
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(userCredential.user, {
        displayName: `${values.firstName} ${values.lastName}`,
      });
      setSuccessMsg('Account created! Redirecting...');
      if (onRegister) {
        onRegister({
          email: userCredential.user.email,
          firstName: values.firstName,
          lastName: values.lastName,
          uid: userCredential.user.uid,
        });
      }
      reset();
      setTimeout(() => {
        setSuccessMsg('');
        navigate('/account');
      }, 1500);
    } catch (error) {
      setErrorMsg(error.message.replace('Firebase:', '').replace('auth/', '').replace(/-/g, ' '));
    }
  };

  return (
    <div className="flex flex-1 min-h-[80vh] bg-brand-50 items-center justify-center px-2">
      <Card className="w-full max-w-md bg-brand-700 rounded-2xl shadow-lg p-6">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center text-brand-100 mb-2">
            Create Your Account
          </h1>
          <p className="text-md text-brand-100 text-center mb-2">
            Please fill out the form below to register for Little Lemon.
          </p>
        </CardHeader>
        <CardContent>
          {/* ARIA-live region for a11y success message */}
          <div
            role="status"
            aria-live="polite"
            tabIndex={-1}
            ref={formStatusRef}
            className={successMsg ? 'mb-2 outline-none' : 'sr-only'}
          >
            {successMsg && <p className="text-green-300 font-semibolb">{setSuccessMsg}</p>}
          </div>
          {errorMsg && (
            <div role="alert" aria-live="assertive" className="mb-2">
              <p className="text-red-300 font-semibold">{errorMsg}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
            className="space-y-4"
            aria-describedby={errorMsg ? 'register-error' : undefined}
          >
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-brand-100">
                First Name
              </Label>
              <Input
                id="firstName"
                {...register('firstName')}
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                placeholder="Please enter your first name"
                className={`bg-white text-brand-900 mt-1 ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
              />
              {errors.firstName && (
                <span id="firstName-error" className="text-red-3ßß tex-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-brand-100">
                Last Name
              </Label>
              <Input
                id="lastName"
                {...register('lastName')}
                autoComplete="family-name"
                placeholder="Please enter your last name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                className={`bg-white text-brand-900 mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
              />
              {errors.lastName && (
                <span id="lastName-error" className="text-red-300 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-brand-100">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                autoComplete="email"
                placeholder="Please enter your email address"
                aria-invalid={!!errors.email}
                aria-desribedby={errors.email ? 'email-error' : undefined}
                className={`bg-white text-brand-900 mt-1 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <span id="email-error" className="text-red-300 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-brand-100">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                autoComplete="new-password"
                placeholder="Enter password"
                ä
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={`bg-white text-brand-900 mt-1 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && (
                <span id="password-error" className="text-red-300 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-brand-100">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                aria-invalid={!!errors.confirmPassword}
                aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                className={`bg-white text-brand-900 mt-1 ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
              />
              {errors.confirmPassword && (
                <span id="confirmPassword-error" className="text-red-300 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            {/* Submit */}
            <Button
              type="submit"
              className="w-full mt-2 bg-brand-100 border-2 border-black text-black text-lg font-semibold hover:br-brand-50 hover:text-black transition"
              aria-busy={isSubmitting}
              disabled={!isValid || !isDirty || isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </form>
          <p className="pt-2 text-center text-md">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-brand-100 font-bold hover:underline hover:text-brand-50"
              aria-label="Log in"
            >
              Log in here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
};
