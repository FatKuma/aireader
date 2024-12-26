import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileSearch, Brain } from 'lucide-react';

export function Home() {
  const features = [
    {
      title: 'Dialog Extractor',
      description: 'Extract character dialogues from PDF and TXT files',
      icon: MessageSquare,
      path: '/dialog-extractor'
    },
    {
      title: 'Data Extractor',
      description: 'Extract structured data from documents',
      icon: FileSearch,
      path: '/data-extractor'
    },
    {
      title: 'Qwen Chat',
      description: 'Chat with AI about your documents',
      icon: Brain,
      path: '/qwen-chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Reader</h1>
          <p className="text-xl text-gray-600">
            A web app for reading documents and extracting information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}