import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';

export default function About() {
  return (
    <>
      <Head><title>About | Soulful Tarot</title></Head>
      <Navbar />
      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif mb-6">About Aashi</h1>
            <p className="text-lg text-deepPurple/80 mb-4">Aashi guides people with tarot, reiki, and numerology to rediscover intuition and inner strength.</p>
            <p className="text-lg text-deepPurple/80">With kindness and clarity, she offers you a nurturing safe space for personal transformation.</p>
          </div>
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}
