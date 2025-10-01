'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiMail, FiLock, FiLoader } from 'react-icons/fi';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-gray-400 mt-2">Join us today</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-3 font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            >
              {loading ? <FiLoader className="w-5 h-5 animate-spin mx-auto" /> : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
