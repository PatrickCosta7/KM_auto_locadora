'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-5xl bg-primary/98 text-white flex items-center justify-between px-8 py-3 rounded-3xl shadow-lg"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center mr-8">
        <Image
          src="/images/km_logo.png"
          alt="Logo KM"
          width={60}
          height={60}
          className="hover:opacity-80 transition-opacity w-14 h-14"
        />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#how-it-works" className="navbar-anim-link text-white text-base font-medium">Como funciona?</Link>
        <Link href="#beneficios" className="navbar-anim-link text-white text-base font-medium">Benefícios</Link>
        <Link href="#contato" className="navbar-anim-link text-white text-base font-medium">Fale conosco</Link>
      </div>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white ml-4"
        aria-label="Toggle navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary/98 rounded-t-none rounded-b-3xl shadow-lg py-2 z-40 -mt-5">
          <div className="flex flex-col items-center gap-4">
            <Link href="#how-it-works" className="navbar-anim-link text-white text-base font-medium" onClick={() => setIsMenuOpen(false)}>Como funciona?</Link>
            <Link href="#beneficios" className="navbar-anim-link text-white text-base font-medium" onClick={() => setIsMenuOpen(false)}>Benefícios</Link>
            <Link href="#contato" className="navbar-anim-link text-white text-base font-medium" onClick={() => setIsMenuOpen(false)}>Fale conosco</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
