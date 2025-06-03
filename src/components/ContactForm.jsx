// components/ContactForm.js
import { useState } from 'react';
import Head from 'next/head';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <>

      
      <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Contact Our Valve Experts
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 px-4 sm:px-0">
                Have questions about our dismantling joint valves? Our technical team is ready to assist you.
              </p>
            </div>
            
            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Contact Info */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                {/* Contact Information Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4 md:space-y-6">
                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-50 p-2 md:p-3 rounded-lg">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base md:text-lg font-medium text-gray-900">Sales & Support</h4>
                        <div className="mt-1 space-y-1">
                          <a href="tel:+919167738535" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 91677 38535</a>
                          <a href="tel:+919820677197" className="block text-gray-600 hover:text-blue-600 transition-colors">+91 98206 77197</a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-50 p-2 md:p-3 rounded-lg">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base md:text-lg font-medium text-gray-900">Email</h4>
                        <a href="mailto:sktrading369@gmail.com" className="mt-1 block text-gray-600 hover:text-blue-600 transition-colors">sktrading369@gmail.com</a>
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-50 p-2 md:p-3 rounded-lg">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base md:text-lg font-medium text-gray-900">Factory & Office</h4>
                        <address className="mt-1 not-italic text-gray-600 space-y-1">
                          <p>Plot No. 03, Thane-Pune Road, Dahisar Naka, Thakurpada</p>
                          <p>Thane-400612, Maharashtra, India</p>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm md:text-base">Monday - Saturday</span>
                      <span className="font-medium text-gray-900 text-sm md:text-base">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm md:text-base">Sunday</span>
                      <span className="font-medium text-gray-900 text-sm md:text-base">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                    Send Us Your Inquiry
                  </h3>
                  
                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Thank you for your inquiry!</span>
                      </div>
                      <p className="mt-1 text-sm">Our team will contact you within 24 hours.</p>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-medium">{error || 'Failed to send message'}</span>
                      </div>
                      <p className="mt-1 text-sm">Please try again later or contact us directly.</p>
                    </div>
                  )}
                  
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      
                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    
                    {/* Product Interest */}
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                        required
                      >
                        <option value="">Select size range</option>
                        <option value="80-300mm">DN80 - DN300 (3" - 12")</option>
                        <option value="350-600mm">DN350 - DN600 (14" - 24")</option>
                        <option value="700-1000mm">DN700 - DN1000 (28" - 40")</option>
                        <option value="1200-2500mm">DN1200 - DN2500 (48" - 100")</option>
                        <option value="custom">Custom Requirements</option>
                      </select>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                        placeholder="Tell us about your project requirements, specifications, or any questions you may have..."
                        required
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${
                          status === 'sending' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        {status === 'sending' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          'Submit Inquiry'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}