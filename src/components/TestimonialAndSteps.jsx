import React from 'react';

const TestimonialsAndSteps = () => {
  const testimonials = [
    {
      quote: 'Made to Chat transformed our customer support. We reduced response time by 80% and our customers love the instant help.',
      name: 'Sarah Johnson',
      role: 'Marketing Manager at TechStart Inc.',
      initials: 'SJ',
    },
    {
      quote: 'Setting up our chatbot was incredibly easy. No coding required and it handles 90% of our FAQs automatically.',
      name: 'Michael Chen',
      role: 'E-commerce Owner at ShopSmart',
      initials: 'MC',
    },
    {
      quote: 'The AI training on our data was seamless. Our chatbot provides accurate answers that feel genuinely helpful.',
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead at ServicePro',
      initials: 'ER',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Upload Data',
      description: 'Add your content – documents, FAQs, or any text-based knowledge.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      step: '2',
      title: 'Train AI',
      description: 'Our AI processes and learns from your data automatically.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      step: '3',
      title: 'Test & Refine',
      description: 'Chat with your bot, test responses, and fine-tune performance.',
      color: 'bg-green-100 text-green-600',
    },
    {
      step: '4',
      title: 'Deploy',
      description: 'Get embed code and add your chatbot to any website.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Trusted by Thousands of Businesses</h2>
      <p className="text-center text-gray-600 mb-6">
        <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span> <strong>4.9/5</strong> from 2,500+ reviews
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6">
            <div className="text-blue-400 text-3xl mb-3">❝</div>
            <p className="italic text-sm mb-4">"{t.quote}"</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Join Happy Customers
        </button>
      </div>

      {/* How It Works */}
      <div className="bg-blue-50 mt-20 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full text-lg font-bold flex items-center justify-center mb-4 ${step.color}`}>
                {step.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndSteps;
