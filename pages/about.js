import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About – Soulful Tarot Journey By Aashi</title>
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-6">About Soulful Tarot Journey By Aashi</h1>
          <p className="text-md text-deepPurple/70 mb-8">
            At Soulful Tarot Journey By Aashi, we believe in the healing power of insight, energy, and intuition.
          </p>
          <p className="text-sm text-deepPurple/80 mb-4 leading-relaxed">
            Founded from a deep love for spiritual connection, our mission is to provide a safe, welcoming space
            where you can explore your soul’s journey. Each session is approached with empathy, wisdom, and a desire to help you awaken your inner guide.
          </p>
          <p className="text-sm text-deepPurple/80 leading-relaxed">
            We combine ancient practices with modern care to offer a uniquely transformative experience.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
