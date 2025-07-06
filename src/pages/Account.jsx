import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// shadcn/ui components
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Account({ user, onLogout }) {
  const navigate = useNavigate();
  const headingRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      //Focus the heading for screen readers on arrival
      if (headingRef.current) headingRef.current.focus();
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-1 min-h-[70vh] items-center justify-center bg-brand-50 px-2">
      <Card className="w-full max-w-xl bg-brand-50 rounded-2xl shadow-m p-8">
        <CardHeader>
          <h1
            ref={headingRef}
            className="text-2xl font-bold text-brand-700 mb-4"
            tabIndex={-1}
            id="account-title"
          >
            Welcome, {user?.firstName || user?.email || 'User'}!
          </h1>
        </CardHeader>
        <CardContent>
          <p className="text-md text-brand-900 mb-6">
            This is your account area. You are logged in as: <b>{user?.email}</b>
          </p>
          {/* More content/ features can go here */}
        </CardContent>
        <CardFooter>
          <Button
            type="button"
            className="bg-brand-100 border-2 border-black text-black hover:bg-brand-700 hover:text-brand-100 font-semibold transition"
            onClick={onLogout}
            aria-label="Log out"
          >
            Log out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

Account.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};
