import React from 'react';
import ChatBot from './ChatBot';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Smart Chatbots</span> That Learn From Your Data
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Upload your content, train a custom AI chatbot, and deploy it on your website in minutes. No coding required - just intelligence powered by your own knowledge base.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
          Start Building Now
        </button>
        <button onClick={()=>navigate('/test')} className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-md">
          Try Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;