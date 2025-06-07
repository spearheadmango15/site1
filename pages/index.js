import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soulful Tarot Journey By Aashi</title>
      </Head>
      <Navbar />

      <main className="bg-mist text-center px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/bg1.png"  // Replace with your hero image file name
            alt="Tarot cards with candles and crystals"
            width={1000}
            height={600}
            className="rounded-3xl shadow-md mx-auto"
          />

          <h1 className="text-5xl font-serif mt-10 mb-4">Healing Services</h1>
          <p className="text-lg text-deepPurple/80 font-light mb-12">
            Guidance for your mind, body, and spirit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-4xl mb-3">🃏</div>
              <h2 className="text-xl font-serif mb-1">Tarot Readings</h2>
              <p className="text-sm text-deepPurple/70">Explore the unknown.</p>
            </div>
            <div className="card">
              <div className="text-4xl mb-3">🌿</div>
              <h2 className="text-xl font-serif mb-1">Reiki Healing</h2>
              <p className="text-sm text-deepPurple/70">Balance your energy.</p>
            </div>
            <div className="card">
              <div className="text-4xl mb-3">🔢</div>
              <h2 className="text-xl font-serif mb-1">Numerology</h2>
              <p className="text-sm text-deepPurple/70">Decode your path.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
