import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
      </div>
    </main>
  );
}
