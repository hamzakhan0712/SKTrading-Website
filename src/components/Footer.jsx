import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo.png" 
                alt="S.K Trading & Co. Logo" 
                className="h-10 md:h-12 rounded-full border border-gray-700 hover:border-primary-500 transition-all duration-300" 
              />
              <span className="text-xl font-bold text-white">S.K Trading & Co.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Specializing in high-performance dismantling joint valves for water supply, industrial piping, and municipal infrastructure projects across India.
            </p>
            <div className="pt-2">
              <span className="text-xs text-gray-600">Powered by</span>
              <a 
                href="https://initcore.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm font-medium mt-1"
              >
                InitCore Developers Group
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
           
          </div>

          {/* Resources */}
          <div className="space-y-5">
           
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Plot No. 03, Thane-Pune Road, Dahisar Naka, Thakurpada, Thane-400612, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors duration-200">+91 91677 38535</a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@sktradings.in" className="text-gray-400 hover:text-white transition-colors duration-200">sktrading369@gmail.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} S.K Trading & Co. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">Terms of Service</Link>
             
              <a 
                href="https://initcore.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 text-sm transition-colors duration-200 flex items-center"
              >
                <span>Development Partner</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}