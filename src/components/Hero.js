import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Dismantling Joint Specialists & Manufacturers",
    description: "Precision-engineered valves from 50mm to 2500mm for critical pipeline applications",
    image: "/images/Hero-1.png",
  },
  {
    id: 2,
    title: "Engineered for Extreme Conditions",
    description: "Mild Steel (IS 2062) construction with corrosion-resistant coatings",
    image: "/images/Hero-2.png",
  },
  {
    id: 3,
    title: "Certified Quality Assurance",
    description: "ISO 9001:2015 certified manufacturing | Udyam registered | EN 1092-2 compliant",
    image: "/images/certification-hero.png", // Add your certification image
  },
  {
    id: 4,
    title: "Global Industrial Solutions Provider",
    description: "Trusted by water authorities and industrial plants across 15+ countries",
    image: "/images/Hero-3.webp",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen max-h-[580px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              style={{
                objectFit: 'cover'
              }}
              quality={100}
              priority
              className={`${slide.id === 3 ? 'brightness-100' : 'brightness-75'}`} // Less darken for certification slide
            />
            <div className={`absolute inset-0 ${slide.id === 3 ? 'bg-blue-900/40' : 'bg-gradient-to-r from-blue-900/50 to-blue-600/20'}`}></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto pt-18 ">
          <motion.h1 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={currentSlide + 'desc'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto drop-shadow-md"
          >
            {slides[currentSlide].description}
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products" 
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Explore Product Range
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request Technical Specs
            </motion.a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Certification Badges (shown only on non-certification slides) */}
        {currentSlide !== 2 && (
          <div className="absolute bottom-24 left-0 right-0">
            <div className="flex justify-center gap-4">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">ISO 9001:2015 Certified</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">Udyam Registered</span>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-0 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
    </section>
  );
}