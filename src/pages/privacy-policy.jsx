import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LAST_UPDATED_DATE = 'May 17, 2025';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      <Head>
        <title>Privacy Policy | S.K Trading & Co.</title>
        <meta 
          name="description" 
          content="Privacy policy for S.K Trading & Co. - India's leading manufacturer of premium dismantling joint valves (80mm-2500mm)" 
        />
        <meta 
          name="keywords" 
          content="dismantling joint valve privacy policy, SK Trading privacy, industrial valves company privacy" 
        />
      </Head>

      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Last Updated: {LAST_UPDATED_DATE}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Introduction</h2>
                <p>
                  Welcome to S.K Trading & Co. ("we," "our," or "us"). We are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. Information We Collect</h2>
                <p>
                  As a static informational website, we do not actively collect personal data. However, we may receive information that you voluntarily provide through:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Contact form submissions (name, email, phone number, message content)</li>
                  <li>Email communications</li>
                  <li>Automatically collected non-personal data (via cookies and analytics)</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. How We Use Information</h2>
                <p>
                  Any information we receive is used solely for the purpose of:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Responding to your inquiries</li>
                  <li>Providing information about our products and services</li>
                  <li>Improving our website experience</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect any information we receive. However, please be aware that no internet transmission is completely secure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">5. Third-Party Services</h2>
                <p>
                  Our website may use third-party services like Google Analytics to understand website traffic. These services have their own privacy policies governing data use.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">6. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">7. Contact Us</h2>
                <p>
                  For questions about this Privacy Policy, please contact us through the contact form on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}