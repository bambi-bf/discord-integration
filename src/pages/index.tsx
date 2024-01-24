"use client"

import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-white mb-8">Welcome to Your Community</h1>
          <p className="text-lg text-gray-300 mb-8">Join the conversation and collaborate with your team!</p>
          <div className="flex space-x-4">
            {/* <Link href="/login"> */}
                <button onClick={() => {signIn('discord')}} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Login
                </button>
            {/* </Link> */}
            {/* <Link href="/register">
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Sign Up</button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;