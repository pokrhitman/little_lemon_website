import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import PropTypes from 'prop-types';
import login from '../assets/login.jpg';

function Login({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
  } = useForm({ mode: 'onTouched' });

  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef(null);
  const auth = getAuth(app);

  const onSubmit = async values => {
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      setSuccessMsg('Login successful! Redirecting...');
      if (onLogin) {
        onLogin({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
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
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden w-full min-h-[80vh]">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none w-full h-full"
        style={{
          backgroundImage: `url(${login})`,
          filter: 'blur(4px) brightness(0.9)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      <div className="max-w-md w-full bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-green-900 text-center mb-2" id="login-title">
          Log In to Little Lemon
        </h1>

        {/* ARIA-live region for success message */}
        <div
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={formRef}
          className={successMsg ? 'mb-2' : ''}
        >
          {successMsg && (
            <div className="text-green-800 bg-green-100 font-bold py-2 px-4 rounded mb-2 transition text-center">
              {successMsg}
            </div>
          )}
        </div>
        {/* Error Message */}
        {errorMsg && (
          <div role="alert" aria-live="assertive" className="mb-2">
            <div className="text-red-800 bg-red-100 font-bold py-2 px-4 rounded text-center">
              {errorMsg}
            </div>
          </div>
        )}

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-labelledby="login-title"
        >
          <div>
            <label className="font-bold text-green-900" htmlFor="email">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="Please enter your email."
              {...register('email', {
                required: 'Email address is required.',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Please enter a valid email address.',
                },
              })}
              aria-invalid={!!errors.email}
              className="mt-1 bg-white/70 border border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="font-bold text-green-900" htmlFor="password">
              Password *
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Please enter your password."
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters.',
                },
              })}
              aria-invalid={!!errors.password}
              className="mt-1 bg-white/70 border border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full font-bold bg-yellow-400 hover:bg-yellow-300 text-green-900 mt-2"
            disabled={isSubmitting || !isValid || !isDirty}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
        <div className="text-center text-md font-bold text-green-900 pt-2">
          Don&apos;t have an account?{' '}
          <RouterLink
            to="/register"
            className="text-yellow-600 font-bold hover:underline"
            aria-label="Sign up for an account"
          >
            Sign up here!
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
