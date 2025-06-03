import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductRange() {
// Updated size array with exact required sizes
const sizes = [
  50, 65, 80, 100, 125, 150, 200, 250, 300,
  350, 400, 450, 500, 600, 700, 800, 900, 1000,
  1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900,
  2000, 2100, 2200, 2300, 2400, 2500
];

// Group sizes by range for better visualization
const sizeGroups = [
  { range: "50-300mm", description: "Standard Sizes" },
  { range: "350-1000mm", description: "Medium Diameter" },
  { range: "1100-2500mm", description: "Large Diameter" }
];


  return (
    <section id="products" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Precision Engineered Valve Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive range of dismantling joint valves for industrial and municipal applications
          </motion.p>
        </div>


          {/* Size Range Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h3 className="text-2xl font-bold text-gray-900">Mild Steel Dismantling Joint Size Spectrum</h3>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="font-medium text-gray-800">Material: Mild Steel (IS 2062 Grade A)</span>
                </div>
              </div>
              

              {/* Enhanced Size Range Graphic */}
              <div className="relative h-28 mb-10 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
                  {/* Measurement Scale */}
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-blue-300"></div>
                  <div className="absolute top-1/4 left-0 right-0 h-1 bg-blue-600 transform -translate-y-1/2"></div>
                  
                  {/* Size Range Indicators */}
                  {sizeGroups.map((group, idx) => {
                    const positions = ['20%', '50%', '80%'];
                    return (
                      <div
                        key={idx}
                        className={`absolute top-0 h-full flex flex-col items-center`}
                        style={{ left: positions[idx] }}
                      >
                        <div className="relative flex flex-col items-center gap-2">
                          <div className="bg-blue-600 w-1 h-12"></div>
                          <div className="absolute top-full w-max text-center">
                            <div className="text-xs font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-full shadow-sm">
                              {group.range}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {group.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Start/End Labels */}
                  <div className="absolute left-6 bottom-4 text-sm font-medium text-blue-900">
                    DN50
                  </div>
                  <div className="absolute right-6 bottom-4 text-sm font-medium text-blue-900">
                    DN2500
                  </div>
                </div>
              </div>

              {/* Size Grid with Material Badges */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {sizes.map((size) => (
                  <motion.div 
                    key={size}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                    className="bg-white border border-blue-100 p-3 rounded-lg text-center shadow-sm transition-all relative group hover:border-blue-300"
                  >
                    <span className="text-lg font-semibold text-blue-900 block">{size}mm</span>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      MS
                    </div>
                    <div className="text-xs text-gray-500 mt-1">DN{size}</div>
                    {[50, 300, 1000, 2500].includes(size) && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                        {size === 50 && 'Min'}
                        {size === 300 && 'Std'}
                        {size === 1000 && 'Med'}
                        {size === 2500 && 'Max'}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  TECHNICAL SPECIFICATIONS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-3 h-3 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Material: Mild Steel (IS 2062 Grade A)</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-3 h-3 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pressure Rating: PN10/PN16 Standard</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-3 h-3 text-blue-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flange Standard: EN 1092-2</span>
                  </div>
                </div>
              </div>
              
             
            </div>
          </motion.div>

        {/* Product Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900"
            >
              Engineered for Performance & Longevity
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              Our dismantling joint valves are manufactured to ISO 9001 standards, ensuring unmatched reliability in water distribution, wastewater treatment, and industrial applications.
            </motion.p>
            
            <div className="space-y-6">
              {[
                "Full DN80-DN2500 size availability with custom options",
                "High-grade stainless steel and ductile iron construction",
                "Pressure ratings up to PN16/PN25 for demanding applications",
                "Flanged ends to EN 1092-2 standards for universal compatibility",
                "EPDM/NBR seals suitable for potable water applications",
                "Maintenance-friendly design with replaceable components"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 bg-blue-100 p-1.5 rounded-full">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image 
                src="/images/valve-sample.png" 
                alt="Premium Dismantling Joint Valve"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                quality={100}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-lg shadow-lg border border-gray-100">
              <div className="text-sm font-medium text-gray-500">Featured Product</div>
              <div className="text-lg font-bold text-blue-800">DN300 Dismantling Joint</div>
            </div>
          </motion.div>
        </div>

        
        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mb-10 bg-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Certifications & Accreditations</h3>
            <p className="text-gray-600 mt-2">Recognized for quality and compliance with international standards</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {[
              {
                name: "ISO 9001:2015",
                description: "Quality Management System",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                name: "IAF Accredited",
                description: "International Accreditation",
                icon: (
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                name: "Udyam Registered",
                description: "Govt. of India MSME",
                icon: (
                  <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                name: "EAS Certified",
                description: "European Approval",
                icon: (
                  <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quality Assurance Note */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <svg className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h4 className="text-lg font-bold text-blue-800 mb-2">Quality Assurance Commitment</h4>
                <p className="text-gray-700">
                  Our manufacturing processes adhere to strict quality control protocols certified under ISO 9001:2015 with IAF accreditation. 
                  We maintain complete traceability of materials and implement rigorous testing at every production stage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}