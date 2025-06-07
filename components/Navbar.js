import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-lavender flex justify-between items-center shadow-sm">
      <div className="text-2xl font-serif text-deepPurple">
        ✦ Soulful Tarot Journey By Aashi
      </div>
      <div className="space-x-6">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}
