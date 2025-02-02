import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Articles from './components/Articles';
import HotTakes from './components/HotTakes';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background-rgb))] text-[rgb(var(--text-primary))]">
      <Hero />
      <Introduction />
      <Experience />
      <Articles />
      <HotTakes />
    </main>
  );
}
