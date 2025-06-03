import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LAST_UPDATED_DATE = 'May 17, 2025';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      <Head>
        <title>Terms & Conditions | S.K Trading & Co.</title>
        <meta 
          name="description" 
          content="Terms and conditions for S.K Trading & Co. - India's leading manufacturer of premium dismantling joint valves (80mm-2500mm)" 
        />
        <meta 
          name="keywords" 
          content="dismantling joint valve terms, SK Trading terms and conditions, industrial valves company terms" 
        />
      </Head>

      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Last Updated: {LAST_UPDATED_DATE}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Website Use</h2>
                <p>
                  By accessing this website, you agree to comply with these terms. The content is for general information about our products and services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of S.K Trading & Co. and protected by intellectual property laws.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. Product Information</h2>
                <p>
                  Product specifications and descriptions are provided for informational purposes. We reserve the right to modify product details without notice.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Limitation of Liability</h2>
                <p>
                  S.K Trading & Co. shall not be liable for any direct, indirect, or consequential loss resulting from the use of this website or reliance on its content.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">5. External Links</h2>
                <p>
                  This website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">6. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the website constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">8. Contact Information</h2>
                <p>
                  For inquiries regarding these terms, please contact us through the contact form on our website.
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