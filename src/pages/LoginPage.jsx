import React, { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4">
      {/* Logo + Title */}
      <div className="text-center mb-6">
        <div className="text-5xl text-blue-600 mb-2">🧠</div>
        <h1 className="text-2xl font-bold text-gray-900">ChatBot Builder</h1>
        <p className="text-gray-600 text-sm">Build and deploy intelligent chatbots</p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-1">Welcome back</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Sign in to your account to continue</p>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          <span>📧</span>
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">OR CONTINUE WITH EMAIL</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email & Password */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
