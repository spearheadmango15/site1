import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Soulful Tarot</title></Head>
      <Navbar />
      <main className="bg-mist text-deepPurple px-4 pt-20 pb-24 min-h-screen">
        <ScrollFade>
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-serif mb-6 text-center">Get in Touch</h1>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border border-deepPurple/30 bg-white/80 focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-deepPurple/30 bg-white/80 focus:outline-none" />
              <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-deepPurple/30 bg-white/80 focus:outline-none h-40" />
              <button type="submit" className="w-full bg-deepPurple text-white py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Send Message
              </button>
            </form>
          </div>
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}
