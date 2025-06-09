import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';

export default function Services() {
  const services = [
    { title: 'Tarot Reading', desc: 'Insight & clarity through intuitive tarot sessions.' },
    { title: 'Reiki Healing', desc: 'Energy balancing to soothe mind, body & spirit.' },
    { title: 'Numerology', desc: 'Discover your life path through sacred numbers.' },
  ];

  return (
    <>
      <Head><title>Services | Soulful Tarot</title></Head>
      <Navbar />
      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-serif mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-white/70 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h2 className="text-2xl font-serif mb-2">{s.title}</h2>
                  <p className="text-sm text-deepPurple/80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}
