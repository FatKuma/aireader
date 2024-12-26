import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  );
}