import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import app from '../firebase';
import PropTypes from 'prop-types';
import charcoal from '../assets/charcoal.jpg';

const db = getFirestore(app);

const heardFromOptions = [
  { value: 'social-media', label: 'Social Media' },
  { value: 'friends', label: 'Friends' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'other', label: 'Other' },
];

function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
    setFocus,
  } = useForm({
    mode: 'onTouched',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const statusRef = useRef(null);

  const onSubmit = async values => {
    setSuccessMsg('');
    try {
      await addDoc(collection(db, 'feedback'), {
        ...values,
        createdAt: serverTimestamp(),
      });
      setSuccessMsg(
        `Thank you for your feedback${values.firstName ? `, ${values.firstName}` : ''}!`
      );
      reset();
      setTimeout(() => setSuccessMsg(''), 4000);
      setFocus('firstName');
    } catch (error) {
      setSuccessMsg('Could not submit feedback, please try again.');
      // Log error to console for dev/ debugging:
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div
      id="main-content"
      className="relative flex-1 flex flex-col items-center overflow-hidden w-full"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none w-full h-full"
        style={{
          backgroundImage: `url(${charcoal})`,
          filter: 'blur(4px), brightness(0.5)',
          opacity: 0.75,
        }}
        aria-hidden="true"
      />

      <main className="w-full flex items-center py-10 px-2">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-3">
          <div>
            <h1 className="text-3xl font-bold text-yellow-300 drop-shadow-lg mb-1">
              We&apos;d love your feedback!
            </h1>
            <p className="text-lg font-bold text-gray-50 drop-shadow">
              How was your experience at Little Lemon? Drop a comment below and help us keep
              improving.
            </p>
          </div>
          {/* Success message ARIA live region */}
          <div
            role="status"
            aria-live="polite"
            tabIndex={-1}
            ref={statusRef}
            className={successMsg ? 'mb-4' : ''}
          >
            {successMsg && (
              <div className="text-yellow-900 bg-yellow-200 font-bold py-2 px-4 rounded mb-2 transition">
                {successMsg}
              </div>
            )}
          </div>
          <form
            className="bg-white/85 backdrop-blur-md rounded-xl shadow-xl p-8 w-full flex flex-col gap-6"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="font-bold text-green-900" htmlFor="firstName">
                First Name *
              </label>
              <Input
                id="firstName"
                autoComplete="given-name"
                placeholder="Please enter your first name."
                {...register('firstName', { required: 'Please enter your first name.' })}
                aria-invalid={!!errors.firstName}
                className="mt-1 bg-white/70 border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
              />
              {errors.firstName && (
                <span className="text-red-600 text-sm">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <label className="font-bold text-green-900" htmlFor="lastName">
                Last Name *
              </label>
              <Input
                id="lastName"
                autoComplete="family-name"
                placeholder="Please enter your last name."
                {...register('lastName', { required: 'Please enter your last name.' })}
                aria-invalid={!!errors.lastName}
                className="mt-1 bg-white/70 border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm">{errors.lastName.message}</span>
              )}
            </div>
            <div>
              <label className="font-bold text-green-900" htmlFor="email">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Please enter your email address."
                {...register('email', {
                  required: 'Email address is required.',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
                aria-invalid={!!errors.email}
                className="mt-1 bg-white/70 border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
              />
              {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <label className="font-bold text-green-900" htmlFor="message">
                Your Message *
              </label>
              <Textarea
                id="message"
                rows={3}
                maxLength={350}
                placeholder="Please enter your message (max. 350 characters)."
                {...register('message', {
                  required: 'Please enter your message.',
                  maxLength: {
                    value: 350,
                    message: 'Max 350 characters.',
                  },
                })}
                aria-invalid={!!errors.message}
                className="mt-1 bg-white/70 border-yellow-200 focus:border-yellow-400 placeholder:text-yellow-900/70"
              />
              <div className="flex justify-between text-sm">
                <span>
                  {errors.message && <span className="text-red-600">{errors.message.message}</span>}
                </span>
                {/* Character counter */}
                <span className="text-gray-500">{/* Optional: add a live counter count */}</span>
              </div>
            </div>
            <div>
              <label className="font-bold text-green-900 mb-1 block">
                How did you hear about us? *
              </label>
              <RadioGroup
                defaultValue=""
                {...register('heardFrom', { required: 'Please select an option.' })}
                className="flex flex-row gap-8"
              >
                {heardFromOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={opt.value}
                      id={opt.value}
                      {...register('heardFrom')}
                      className="border-2 border-yellow-600 data-[state-checked]:bg-yellow-400 data-[state-checked]:border-yellow-600 w-5 h-5"
                    />
                    <label htmlFor={opt.value} className="text-green-900 whitespace-nowrap">
                      {opt.label}
                    </label>
                  </div>
                ))}
              </RadioGroup>
              {errors.heardFrom && (
                <span className="text-red-600 text-sm">{errors.heardFrom.message}</span>
              )}
            </div>
            <Button
              type="submit"
              className="w-full font-bold bg-yellow-400 hover:bg-yellow-300 text-green-900 mt-2"
              disabled={isSubmitting || !isValid || !isDirty}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </main>
      {/* Dummy div for Tailwind JIT color registry */}
      <div className="hidden hover:bg-yellow-100 hover:bg-yellow-300" />
    </div>
  );
}

Feedback.propTypes = {
  onFeedback: PropTypes.func,
};

export default Feedback;
