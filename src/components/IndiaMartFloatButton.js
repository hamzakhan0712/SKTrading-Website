import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IndiaMartFloatButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after component mounts (client-side only)
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-bounce">
      <Link 
        href="https://www.indiamart.com/sk-trading-co-thane/?utm_source=promote_catalog_ios&utm_medium=whatsapp" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg border border-red-400 overflow-hidden"
        aria-label="View on IndiaMART"
      >
        <div className="relative w-10 h-10">
          <Image 
            src="/images/indiamart.jpeg" 
            alt="IndiaMART Verified Seller"
            fill
            className="object-cover"
            
          />
        </div>
      </Link>
    </div>
  );
}