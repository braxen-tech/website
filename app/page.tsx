import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Description from '@/components/Description';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Description />
      <Services />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
}
