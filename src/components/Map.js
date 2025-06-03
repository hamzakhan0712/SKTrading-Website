export default function Map() {
  const address = {
    title: "S.K Trading & Co. Manufacturing Facility",
    lines: [
      "Plot No. 03, Thane-Pune Road",
      "Dahisar Naka, Thakurpada",
      "Thane - 400612",
      "Maharashtra, India"
    ],
    coordinates: "19.1100009,73.0646559", // Updated precise coordinates
    googleMapsLink: "https://www.google.com/maps?q=19.1100009,73.0646559"
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Facility
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-gray-600 leading-relaxed">
              Our state-of-the-art manufacturing unit is strategically located in Thane, 
              equipped with modern infrastructure for precision valve production.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 w-full h-96 sm:h-[500px] lg:h-[550px] relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.303177205763!2d73.06206701538304!3d19.11000088703477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzM2LjAwNCJOIDczwrAwMyc1Mi43NiJF!5e0!3m2!1sen!2sin!4v1620000000000&q=${address.coordinates}&markers=color:red%7Csize:large%7C${address.coordinates}`}
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S.K Trading & Co. Manufacturing Facility Location"
                aria-label="Google Maps location of S.K Trading & Co."
              />
              <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md border border-gray-200">
                <a 
                  href={address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-blue-50 to-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Location Details
                      </h3>
                      <address className="not-italic text-gray-700 space-y-1">
                        {address.lines.map((line, index) => (
                          <p key={index} className="text-base md:text-sm">{line}</p>
                        ))}
                        <p className="mt-3 text-base md:text-sm text-blue-600">
                          <a 
                            href={address.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            View on Google Maps →
                          </a>
                        </p>
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Contact Information
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p className="text-base md:text-sm">Phone: +91 98765 43210</p>
                        <p className="text-base md:text-sm">Email: sktrading369@gmaail.com</p>
                        <p className="text-base md:text-sm">Hours: Mon-Sat, 9AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a
                  href={address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}