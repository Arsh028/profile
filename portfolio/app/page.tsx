import { getProfileContent } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { EngineeringImpact } from "@/components/EngineeringImpact";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

interface HomeProps {
  searchParams: Promise<{ variant?: string | string[] }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { variant } = await searchParams;
  const content = getProfileContent(variant);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar name={content.name} />
      <main className="flex-1">
        <Hero content={content} />
        <Experience content={content} />
        <EngineeringImpact content={content} />
        <About content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <ScrollToTop />
    </div>
  );
}
