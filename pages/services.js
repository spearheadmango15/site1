import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const services = [
  { emoji: '🃏', title: 'Tarot Readings', desc: 'Intuitive insights for your path.' },
  { emoji: '🌿', title: 'Reiki Healing', desc: 'Balance mind, body, and spirit.' },
  { emoji: '🔢', title: 'Numerology', desc: 'Understand your soul’s blueprint.' },
];

export default function Services() {
  return (
    <>
      <Head><title>Services – Soulful Tarot</title></Head>
      <Navbar />
      <main className="pt-20 bg-mist text-deepPurple px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-serif mb-4">Healing Services</h1>
          <p className="text-base sm:text-lg text-deepPurple/80 mb-8">
            Gentle yet powerful sessions to support your transformation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 bg-candle rounded-xl shadow-md">
                <div className="text-4xl mb-3">{emoji}</div>
                <h2 className="text-xl sm:text-2xl font-serif mb-2">{title}</h2>
                <p className="text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
