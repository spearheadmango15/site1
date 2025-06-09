import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head><title>Contact – Soulful Tarot</title></Head>
      <Navbar />
      <main className="pt-20 bg-mist text-deepPurple px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-serif text-center mb-6">Contact Us</h1>
          <form className="bg-candle p-6 rounded-xl shadow-md space-y-4">
            {['Name', 'Email', 'Message'].map((label, i) => (
              <div key={label}>
                <label className="block text-sm font-medium mb-1">{label}</label>
                {label !== 'Message' ? (
                  <input
                    type={label === 'Email' ? 'email' : 'text'}
                    className="w-full border border-lavender rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amethyst"
                  />
                ) : (
                  <textarea rows={4}
                    className="w-full border border-lavender rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amethyst"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="w-full py-3 bg-deepPurple text-white rounded-full shadow hover:bg-deepPurple/90 transition">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
