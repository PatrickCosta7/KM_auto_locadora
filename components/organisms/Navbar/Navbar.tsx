'use client';

import styles from './Navbar.module.css';
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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-9xl bg-primary text-white flex items-center justify-between px-8 py-4 rounded-3xl shadow-lg"
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
        <Link href="#how-it-works" className={`${styles['navbar-anim-link']} text-white text-base font-medium`}>Como funciona?</Link>
        <Link href="#beneficios" className={`${styles['navbar-anim-link']} text-white text-base font-medium`}>Benefícios</Link>
        <Link href="#contato" className={`${styles['navbar-anim-link']} text-white text-base font-medium`}>Fale conosco</Link>
      </div>
      {/* Mobile menu button with animated hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white ml-4 relative w-8 h-8 focus:outline-none"
        aria-label="Toggle navigation"
      >
        <span className="block absolute left-1/2 top-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2">
          <span
            className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-3'}`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}
          ></span>
        </span>
      </button>
      {/* Mobile Navigation with transition */}
      <div
        className={`absolute top-full left-0 w-full bg-primary rounded-t-none rounded-b-3xl shadow-lg z-40 py-2 -mt-6 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex flex-col items-center gap-2">
          <Link href="#how-it-works" className={`${styles['navbar-anim-link']} text-white text-base font-medium`} onClick={() => setIsMenuOpen(false)}>Como funciona?</Link>
          <Link href="#beneficios" className={`${styles['navbar-anim-link']} text-white text-base font-medium`} onClick={() => setIsMenuOpen(false)}>Benefícios</Link>
          <Link href="#contato" className={`${styles['navbar-anim-link']} text-white text-base font-medium`} onClick={() => setIsMenuOpen(false)}>Fale conosco</Link>
        </div>
      </div>
    </nav>
  );
}
