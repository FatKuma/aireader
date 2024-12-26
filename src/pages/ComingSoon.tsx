import React from 'react';
import { BackButton } from '../components/BackButton';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
      <p className="text-xl text-gray-600">This feature is currently under development.</p>
    </div>
  );
}