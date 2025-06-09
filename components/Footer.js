export default function Footer() {
  return (
    <footer className="bg-candle text-deepPurple pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6">
          {/* SVG icons */}
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C..." />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..." />
            </svg>
          </a>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Soulful Tarot. All rights reserved.</p>
      </div>
    </footer>
  )}
