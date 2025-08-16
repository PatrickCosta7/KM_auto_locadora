'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-4 lg:py-4 xl:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/km_logo.png"
              alt="Logo KM"
              width={90}
              height={90}
              className="hover:opacity-80 transition-opacity w-20 h-20 lg:w-20 lg:h-20 xl:w-22 xl:h-22"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-secondary transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-6 xl:space-x-8">
            <Link href="#how-it-works" className="text-white hover:text-secondary transition-colors font-oxygen text-lg lg:text-lg xl:text-xl">
              Como funciona?
            </Link>
            <Link href="#beneficios" className="text-white hover:text-secondary transition-colors font-oxygen text-lg lg:text-lg xl:text-xl">
              Benefícios
            </Link>
            <Link href="#contato" className="text-white hover:text-secondary transition-colors font-oxygen text-lg lg:text-lg xl:text-xl">
              Fale conosco
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#how-it-works" 
                className="text-white hover:text-secondary transition-colors font-oxygen text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Como funciona?
              </Link>
              <Link 
                href="#beneficios" 
                className="text-white hover:text-secondary transition-colors font-oxygen text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
              <Link 
                href="#contato" 
                className="text-white hover:text-secondary transition-colors font-oxygen text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale conosco
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
