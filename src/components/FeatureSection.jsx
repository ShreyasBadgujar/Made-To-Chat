import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '📤',
      title: 'Easy Data Upload',
      description: 'Upload text files, PDFs, or paste content directly. Our system processes any format.',
      color: 'text-blue-600',
    },
    {
      icon: '🧠',
      title: 'AI Training',
      description: 'Advanced machine learning algorithms train your chatbot using browser-based AI.',
      color: 'text-purple-600',
    },
    {
      icon: '💬',
      title: 'Smart Conversations',
      description: 'Test your chatbot with natural language processing and contextual understanding.',
      color: 'text-green-600',
    },
    {
      icon: '🌐',
      title: 'One-Click Deploy',
      description: 'Get embeddable code to add your chatbot to any website instantly.',
      color: 'text-orange-500',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Browser-based processing means instant responses without server delays.',
      color: 'text-yellow-500',
    },
    {
      icon: '🛡️',
      title: 'Privacy First',
      description: 'Your data stays in your browser. No server uploads, complete privacy control.',
      color: 'text-red-600',
    },
  ];

  // Inline FeatureCard component
  const FeatureCard = ({ icon, title, description, color }) => (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition duration-200">
      <div className={`text-4xl mb-4 ${color}`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  return (
    <section className="px-6 py-12 bg-blue-50">
      <h2 className="text-2xl font-bold text-center mb-10">
        Everything You Need to Build Intelligent Chatbots
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
