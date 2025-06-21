import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
      <p className="text-gray-600 text-center mb-8">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
          <h3 className="text-xl font-semibold mb-1">Send us a Message</h3>
          <p className="text-sm text-gray-500 mb-4">Fill out the form below and we'll get back to you shortly.</p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              rows="4"
              placeholder="Tell us about your project or question..."
              className="w-full border rounded-lg p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-blue-600">
                  📧
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>hello@madetochat.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600">
                  📞
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600">
                  📍
                </span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-semibold mb-2">Need immediate help?</p>
            <p className="text-sm text-gray-600 mb-4">
              Check out our comprehensive documentation or join our community for quick answers.
            </p>
            <div className="flex gap-2">
              <button className="bg-white border px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                View Docs
              </button>
              <button className="bg-white border px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
