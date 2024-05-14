import Hero from './components/Hero';
import About from './components/About';

export default function Home() {
  return (
    <main className="hide-scroll">
      <Hero />
      <About />
      <div className="h-[100dvh]"></div>
    </main>
  );
}
