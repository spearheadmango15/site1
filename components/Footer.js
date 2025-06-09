import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-lavender py-4 px-6 sm:px-8 shadow-md fixed w-full z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-deepPurple">✦ Soulful Tarot</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
        <button className="md:hidden focus:outline-none" aria-label="Toggle menu">
          <svg className="w-6 h-6 text-deepPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>)}
