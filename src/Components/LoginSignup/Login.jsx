import React, { useState } from 'react';

export const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // --- VALIDATION LOGIC ---

    if (!isLoginMode && !formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // --- Update errors ---
    setErrors(validationErrors);

    // --- Stop submission if errors exist ---
    if (Object.keys(validationErrors).length > 0) {
      return; // 🚫 stop here — don’t proceed if validation fails
    }

    // --- If everything passes ---
    alert(
      isLoginMode
        ? '✅ Logged in successfully!'
        : '🎉 Account created successfully!'
    );

    // Optionally reset fields
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* HEADER */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">
          {isLoginMode ? 'Login to Your Account' : 'Create a New Account'}
        </h2>
      </div>

      {/* TOGGLE BUTTONS */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        <button
          type="button"
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            isLoginMode ? 'text-white' : 'text-gray-700'
          }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            !isLoginMode ? 'text-white' : 'text-gray-700'
          }`}
        >
          Sign Up
        </button>
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${
            isLoginMode ? 'left-0' : 'left-1/2'
          }`}
        ></div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLoginMode && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </>
        )}

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password only for signup */}
        {!isLoginMode && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </>
        )}

        {/* Forgot password (login only) */}
        {isLoginMode && (
          <div className="text-right">
            <a href="/" className="text-cyan-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>

        {/* Switch link */}
        <p className="text-center text-gray-600">
          {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="text-cyan-600 hover:underline"
          >
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};
