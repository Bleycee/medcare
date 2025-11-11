// Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Even stricter - only .com
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/i;
const PASSWORD_MIN_LENGTH = 8;

export const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Clear form and errors when switching modes
  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  }, [isLoginMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    // Name validation (signup only)
    if (!isLoginMode) {
      if (!formData.name.trim()) {
        validationErrors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        validationErrors.name = 'Name must be at least 2 characters';
      }
    }

    // Email validation
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < PASSWORD_MIN_LENGTH) {
      validationErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      validationErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    // Confirm password validation (signup only)
    if (!isLoginMode) {
      if (!formData.confirmPassword) {
        validationErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  setIsLoading(true);

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: formData.email, password: formData.password })
    // });

    // Clear form FIRST before showing alert
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    
    // Clear any errors
    setErrors({});

    // Then show success message
    setTimeout(() => {
      alert(
        isLoginMode
          ? 'Logged in successfully!'
          : 'Account created successfully!'
      );
    }, 100);
    
    // Navigate to dashboard (you'll need to create this route)
    // setTimeout(() => navigate('/dashboard'), 200);
    
  } catch (error) {
    setErrors({
      submit: 'An error occurred. Please try again.',
    });
  } finally {
    setIsLoading(false);
  }
};

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const getInputClassName = (fieldName) => {
    return `w-full p-3 border-b-2 outline-none placeholder-gray-400 transition-colors ${
      errors[fieldName]
        ? 'border-red-500 focus:border-red-600'
        : 'border-gray-300 focus:border-cyan-500'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo - Clickable to go home */}
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-cyan-600 hover:text-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            aria-label="Go to homepage"
          >
            MedCare
          </button>

          {/* Back to Home link */}
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-cyan-600 transition-colors font-medium flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 pt-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              {isLoginMode ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-center text-gray-600 mt-2">
              {isLoginMode
                ? 'Sign in to access your account'
                : 'Sign up to get started'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="relative flex h-12 mb-8 border border-gray-300 rounded-full overflow-hidden">
            <button
              type="button"
              onClick={() => setIsLoginMode(true)}
              className={`w-1/2 text-base font-medium transition-all duration-300 z-10 ${
                isLoginMode ? 'text-white' : 'text-gray-700'
              }`}
              aria-label="Switch to login mode"
              aria-pressed={isLoginMode}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLoginMode(false)}
              className={`w-1/2 text-base font-medium transition-all duration-300 z-10 ${
                !isLoginMode ? 'text-white' : 'text-gray-700'
              }`}
              aria-label="Switch to sign up mode"
              aria-pressed={!isLoginMode}
            >
              Sign Up
            </button>
            <div
              className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ease-in-out ${
                isLoginMode ? 'left-0' : 'left-1/2'
              }`}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name field - Sign Up only */}
            {!isLoginMode && (
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClassName('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-red-500 text-sm mt-1 block" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="text-red-500 text-sm mt-1 block" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={getInputClassName('password')}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              {errors.password && (
                <span id="password-error" className="text-red-500 text-sm mt-1 block" role="alert">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Confirm Password - Sign Up only */}
            {!isLoginMode && (
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={getInputClassName('confirmPassword')}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                />
                {errors.confirmPassword && (
                  <span
                    id="confirm-password-error"
                    className="text-red-500 text-sm mt-1 block"
                    role="alert"
                  >
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            )}

            {/* Forgot Password - Login only */}
            {isLoginMode && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => alert('Forgot password functionality coming soon')}
                  className="text-cyan-600 hover:underline text-sm font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Error */}
            {errors.submit && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
                <span className="text-red-600 text-sm">{errors.submit}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-lg font-semibold transition-all ${
                isLoading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:shadow-lg hover:scale-[1.02]'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                <>{isLoginMode ? 'Login' : 'Sign Up'}</>
              )}
            </button>

            {/* Switch Mode Link */}
            <p className="text-center text-gray-600 text-sm">
              {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={toggleMode}
                className="text-cyan-600 hover:underline font-medium"
              >
                {isLoginMode ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};