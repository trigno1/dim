import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Blog } from "@/components/sections/blog";
import { PageTransition } from "@/components/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { HowToContribute } from "@/components/sections/how-to-contribute";
import { Testimonials } from "@/components/sections/testimonials";
import { SubmitCta } from "@/components/sections/submit-cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <HowToContribute />
        <Blog />
        <Testimonials />
        <SubmitCta />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
