import React from 'react';
import { BackButton } from '../components/BackButton';
import { MessageList } from '../components/chat/MessageList';
import { MessageInput } from '../components/chat/MessageInput';
import { Tooltip } from '../components/ui/Tooltip';
import { useChat } from '../hooks/useChat';
import { Brain, Trash2 } from 'lucide-react';

export function QwenChat() {
  const { messages, isLoading, sendMessage, clearChat } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BackButton />
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-semibold text-gray-900">Qwen Chat</h1>
              </div>
            </div>
            <Tooltip text="Clear chat history">
              <button
                onClick={clearChat}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 flex flex-col max-w-3xl">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}