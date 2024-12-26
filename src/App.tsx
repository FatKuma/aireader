import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DialogExtractor } from './pages/DialogExtractor';
import { ComingSoon } from './pages/ComingSoon';
import { QwenChat } from './pages/QwenChat';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog-extractor" element={<DialogExtractor />} />
        <Route path="/data-extractor" element={<ComingSoon />} />
        <Route path="/qwen-chat" element={<QwenChat />} />
      </Routes>
    </BrowserRouter>
  );
}