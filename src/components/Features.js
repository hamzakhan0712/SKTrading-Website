import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Premium Quality Construction",
      description: "Manufactured with IS 2062 Grade A Mild Steel, our valves feature corrosion-resistant coatings and undergo rigorous quality checks at every production stage.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      certifications: ["ISO 9001:2015", "EN 1092-2"]
    },
    {
      title: "Precision Engineered Solutions",
      description: "CNC-machined components ensure perfect dimensional accuracy from DN50 to DN2500 sizes, with pressure ratings up to PN16/PN25 for demanding applications.",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      note: "±0.5mm tolerance guarantee"
    },
    {
      title: "Flexible Commercial Terms",
      description: "Competitive pricing with quantity discounts available. We offer EXW, FOB, and CIF terms to suit your procurement needs with negotiable lead times.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      highlights: ["MOQ: 5 units", "Bulk discounts", "15-30 day lead time"]
    },
    {
      title: "Global Logistics Support",
      description: "With established partnerships with major shipping lines, we ensure timely delivery worldwide. Domestic and international certifications included with every shipment.",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      logistics: ["Sea freight", "Air cargo", "Land transport"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineered for Performance & Value</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality dismantling joints with commercial flexibility for projects of all scales
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className='flex gap-4'>
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              </div>
             
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              {/* Feature-specific details */}
              {feature.certifications && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.certifications.map((cert, i) => (
                      <span key={i} className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {feature.highlights && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {feature.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.logistics && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Options Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.logistics.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {feature.note && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-blue-600 font-medium">
                  {feature.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 flex items-center justify-center">
              <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality & Commercial Assurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Quality Commitment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Material test certificates with every shipment
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      100% pressure testing before dispatch
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Commercial Advantages</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Flexible payment terms (LC, TT, credit)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Project-specific pricing available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}