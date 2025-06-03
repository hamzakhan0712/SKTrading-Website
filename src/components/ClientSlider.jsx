import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ClientSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(5); // Default for desktop

  const clients = [
    { id: 1, name: 'IndianOil', logo: '/images/indianoil.png' },
    { id: 2, name: 'Hindustan Petroleum', logo: '/images/hindustan-petroleum.png' },
    { id: 3, name: 'Bharat Petroleum', logo: '/images/bharat-petroleum.png' },
    { id: 4, name: 'Saudi Aramco', logo: '/images/saudi-aramco.png' },
    { id: 5, name: 'Kirloskar', logo: '/images/kirloskar.png' },
    { id: 6, name: 'Kalpataru', logo: '/images/kalpataru.png' },
  ];

  const totalSlides = clients.length;

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2); // Small tablets
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3); // Tablets
      } else {
        setSlidesToShow(5); // Desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && totalSlides > slidesToShow) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, totalSlides, slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - slidesToShow));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Valued Clients
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders across multiple sectors
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Gradient edge overlays - hidden on mobile */}
            <div className="hidden sm:block absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="hidden sm:block absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

           <div className="sm:px-8 lg:px-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {clients.map((client) => (
                <div 
                  key={client.id} 
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="relative h-28 sm:h-36 md:h-40 w-full flex items-center justify-center p-2 sm:p-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={100}
                      className="object-contain h-full w-full  transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Navigation Arrows - smaller on mobile */}
            {totalSlides > slidesToShow && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-md sm:shadow-xl hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-20 group"
                  aria-label="Previous client"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= totalSlides - slidesToShow}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-md sm:shadow-xl hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-20 group"
                  aria-label="Next client"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 text-center text-gray-500 text-xs sm:text-sm italic max-w-3xl mx-auto px-4">
            <p>
              *We have supplied materials to these companies, including indirect supplies through various traders 
              and registered vendors for the mentioned organizations & through A.S Khan's (Director) previous associations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}