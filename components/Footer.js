export default function Footer() {
  return (
    <footer className="bg-candle text-deepPurple py-8 mt-16 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <svg
            className="mx-auto mb-4 opacity-20"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" stroke="#A78BFA" strokeWidth="4" />
            <path d="M50 10 L55 40 L50 35 L45 40 Z" fill="#A78BFA" />
          </svg>
          <p className="text-sm opacity-70">© {new Date().getFullYear()} Soulful Tarot Journey By Aashi. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://instagram.com/soulful_tarot_journey_by_aashi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="#5B3E75">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm5 4a5 5 0 110 10 5 5 0 010-10zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@SOULFULTAROTJOURNEYByAashi" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:scale-110 transition" fill="#5B3E75" viewBox="0 0 24 24">
              <path d="M21.8 8.001s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.8 5 12 5 12 5s-4.8 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2s-.1 1.7-.1 3.3v1.6c0 1.7.1 3.3.1 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.1 7.5.1 7.5.1s4.8 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.1-1.7.1-3.3v-1.6c0-1.7-.1-3.3-.1-3.3zM9.8 14.5v-5l5.2 2.5-5.2 2.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
