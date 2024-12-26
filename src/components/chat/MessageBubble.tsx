import React from 'react';
import { Message } from '../../types/chat';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-600' : 'bg-gray-600'
      }`}>
        {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
      }`}>
        {message.content}
      </div>
    </div>
  );
}