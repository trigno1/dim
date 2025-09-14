import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { ContentGenerator } from "@/components/sections/content-generator";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Blog />
        <Projects />
        <ContentGenerator />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
