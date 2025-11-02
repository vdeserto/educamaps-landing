import {
  Hero,
  Problem,
  Solution,
  Features,
  Benefits,
  ForWho,
  CTA,
  Footer
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <ForWho />
      <CTA />
      <Footer />
    </main>
  );
}
