import React, { useState, useRef } from 'react';
import '../styles/Auth.css';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const successRef = useRef(null);

  // Example Login handler (fake, for demo)
  const handleLogin = e => {
    e.preventDefault();
    setError('');
    setLoginSubmitted(false);
    // Demo only: accept any non-empty email/pass
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    // Replace with real login logic
    setLoginSubmitted(true);
    setEmail('');
    usePassword('');
    setTimeout(() => setLoginSubmitted(false), 2000);
    if (successRef.current) successRef.current.focus();
  };

  return (
    <main className="auth-main" id="main-content">
      <section className="auth-container">
        <h1 className="auth-heading">Log In to Little Lemon</h1>
        <form className="auth-form" onSubmit={handleLogin} noValidate>
          {loginSubmitted && (
            <div
              className="auth-success"
              role="status"
              tabIndex={-1}
              ref={successRef}
              aria-live="polite"
            >
              Log in successful!
            </div>
          )}
          {error && (
            <div className="auth-error" role="alert" aria-live="assertive">
              {error}
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="login-email" className="auth-label">
              Email
            </label>
            <input
              id="login-email"
              className="auth-input"
              type="email"
              autoComplete="username"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="login-password" className="auth-label">
              Password
            </label>
            <input
              id="login-password"
              className="auth-input"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="auth-submit-button"
            type="submit"
            disabled={!email.trim() || !password.trim()}
            aria-disabled={!email.trim() || !password.trim()}
          >
            Log In
          </button>
        </form>

        <div className="auth-toggle">
          <span>Don't have an account?</span>
          {/* You could link to a real signup or open signup modal */}
          <a
            href="#"
            className="auth-toggle-link"
            tabIndex={0}
            aria-label="Sign up (not yet implemented"
          >
            Sign up
          </a>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
