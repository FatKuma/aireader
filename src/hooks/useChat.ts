import { useState, useCallback, useEffect } from 'react';
import { Message, ChatState } from '../types/chat';

export function useChat() {
  const [state, setState] = useState<ChatState>(() => {
    const saved = localStorage.getItem('chat-messages');
    return {
      messages: saved ? JSON.parse(saved) : [],
      isLoading: false
    };
  });

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(state.messages));
  }, [state.messages]);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true
    }));

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I am a simulated response. The actual Qwen API integration will be implemented here.',
        timestamp: Date.now()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false
      }));
    }, 1000);
  }, []);

  const clearChat = useCallback(() => {
    setState(prev => ({ ...prev, messages: [] }));
    localStorage.removeItem('chat-messages');
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    sendMessage,
    clearChat
  };
}