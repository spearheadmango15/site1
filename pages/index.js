import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head><title>Soulful Tarot | Home</title></Head>
      <Navbar />
      <main className="pt-20 bg-mist text-deepPurple px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 leading-snug">
              Embark on a Soulful Journey
            </h1>
            <p className="text-base sm:text-lg mb-6 text-deepPurple/80">
              Discover your truth, heal with intention, and awaken your inner wisdom.
            </p>
            <Link href="/services" className="inline-block px-6 py-3 bg-deepPurple text-white rounded-full shadow hover:bg-deepPurple/90 transition">
              Explore Services
            </Link>
          </div>
          <div className="relative w-full h-64 sm:h-96 md:h-[500px]">
            <Image
              src="/bg1.png"
              alt="Tarot and crystals"
              fill
              className="rounded-3xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
        <section className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-8">Why Soulful Tarot?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2">
            {[
              { icon: '✨', title: 'Personalized', desc: 'Tailored to your energy.' },
              { icon: '💫', title: 'Holistic', desc: 'Combining multiple healing modalities.' },
              { icon: '🔮', title: 'Sacred Space', desc: 'Safe and nurturing environment.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-6 bg-white/60 rounded-xl shadow-md">
                <div className="text-4xl sm:text-5xl mb-3">{icon}</div>
                <h3 className="text-xl sm:text-2xl font-serif mb-2">{title}</h3>
                <p className="text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
