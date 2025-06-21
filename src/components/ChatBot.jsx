import React, { useState } from 'react';
import SuggestionBox from './SuggestionBox';

const ChatBot = () => {
  const initialMessage = { sender: 'bot', text: 'Hello! How can I assist you today?' };

  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // const response = await fetch('https://api.example.com/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ message: input })
      // });
      const response = await fetch('http://localhost:5173/test', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: input })
});

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error: Unable to reach the server.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const clearMessages = () => {
    setMessages([initialMessage]);
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
  };

  return (
    <div className="max-w-xl my-10 mx-auto h-full flex flex-col p-4 bg-gray-100">
      {/* Header with Clear Button */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-700">ChatBot</h2>
        <button
          onClick={clearMessages}
          aria-label="Clear Chat"
          className="text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
        >
          &times;
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow p-4 space-y-2 mb-4 max-h-[400px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-sm italic text-gray-500">Bot is typing...</div>
        )}
      </div>

      {/* Input Field */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      {/* Suggestion Box Component */}
      <SuggestionBox onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default ChatBot;
