import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head><title>About – Soulful Tarot</title></Head>
      <Navbar />
      <main className="pt-20 bg-mist text-deepPurple px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-serif mb-4">About Soulful Tarot</h1>
          <p className="text-base sm:text-lg text-deepPurple/80 mb-6">
            At Soulful Tarot, we heal through insight, intention, and intuition.
          </p>
          <p className="text-sm sm:text-base text-deepPurple/80 leading-relaxed">
            Founded from deep spiritual practice, we offer a safe and nurturing space to explore your personal growth journey.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
