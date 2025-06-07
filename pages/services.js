import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services – Soulful Tarot Journey By Aashi</title>
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-6">Our Healing Services</h1>
          <p className="text-md text-deepPurple/70 mb-12 max-w-xl mx-auto">
            Whether you're seeking clarity, balance, or purpose, our offerings are designed to guide you gently and powerfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="card">
              <h2 className="text-2xl font-serif mb-2">🃏 Tarot Readings</h2>
              <p className="text-sm text-deepPurple/80">
                Discover deeper truths through intuitive readings that shed light on your journey.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-serif mb-2">🌿 Reiki Healing</h2>
              <p className="text-sm text-deepPurple/80">
                Channel universal energy to restore balance, promote relaxation, and clear emotional blocks.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-serif mb-2">🔢 Numerology</h2>
              <p className="text-sm text-deepPurple/80">
                Decode the sacred numbers in your life and understand your soul's blueprint.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
