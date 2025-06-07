import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Soulful Tarot Journey By Aashi</title>
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-6">Contact Us</h1>
          <p className="text-md text-deepPurple/70 mb-8">
            We’re here to guide, heal, and connect. Reach out with your questions or book a session.
          </p>

          <form className="bg-candle rounded-2xl shadow-lg p-6 text-left space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-lavender bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amethyst"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-lavender bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amethyst"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-lavender bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amethyst"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
          </form>

          <div className="mt-6 text-sm text-deepPurple/60">
            Or reach out via Instagram or YouTube.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
