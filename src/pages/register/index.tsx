"use client";

import React, { useState } from "react";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Add registration logic here
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-6">
            <div className="pb-12">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-blue-500 focus:s-2 sm:text-s"
                placeholder="Email address"
              />
            </div>
            <div className="pb-12">
              <label htmlFor="name" className="sr-only">
                Email address
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-blue-500 focus:s-2 sm:text-s"
                placeholder="Your name"
              />
            </div>
            <div className="pb-12">
              <label htmlFor="password" className="sr-only">
                Email address
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-blue-500 focus:s-2 sm:text-s"
                placeholder="Your password"
              />
            </div>
            <div className="pb-12">
              <label htmlFor="confirmPassword" className="sr-only">
                Email address
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-blue-500 focus:s-2 sm:text-s"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-s font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:z-10 focus:s-2 sm:text-s"
            >
              Sign in
            </button>
            <Link href="/">
              <button className="bg-gray-300 text-gray-800 w-full px-4 py-2 mt-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Go Home
              </button>
            </Link>
            <Link
              href="/login"
              className="underline text-blue-300 hover:text-blue-500 block text-center mt-5"
            >
              Back to Login page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
