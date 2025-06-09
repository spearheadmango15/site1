import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-deepPurple text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif tracking-wider">Soulful Tarot</Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="focus:outline-none">
            <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex md:gap-6 md:items-center transition-all duration-300 ${menuOpen ? 'block mt-4' : 'hidden'} md:block`}>
          {['/', '/about', '/services', '/contact'].map((path, i) => {
            const name = path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link key={i} href={path} className="block px-4 py-2 hover:bg-deepPurple/90 rounded transition">
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
