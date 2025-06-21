import React from 'react';

const SuggestionBox = ({ onSuggestionClick }) => {
  const suggestions = [
    'What are your business hours?',
    'How can I reset my password?',
    'What payment methods do you accept?',
    'How do I contact customer support?',
    'What is your return policy?',
    'Do you offer technical support?'
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Test Suggestions</h3>
      <p className="text-sm text-gray-500 mb-3">
        Try these sample questions to test your chatbot
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {suggestions.map((text, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(text)}
            className="text-left px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBox;
