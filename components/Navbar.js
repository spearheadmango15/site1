import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lavender text-deepPurple shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-2xl font-serif font-bold">
          ✦ Soulful Tarot
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-lavender/90 text-center">
          <Link href="/" className="block py-2 border-b border-deepPurple/10">Home</Link>
          <Link href="/about" className="block py-2 border-b border-deepPurple/10">About</Link>
          <Link href="/services" className="block py-2 border-b border-deepPurple/10">Services</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
