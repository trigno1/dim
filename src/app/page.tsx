import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Blog } from "@/components/sections/blog";
import { SubmitBlog } from "@/components/sections/submit-blog";
import { PageTransition } from "@/components/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { HowToContribute } from "@/components/sections/how-to-contribute";
import { Testimonials } from "@/components/sections/testimonials";

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
        <SubmitBlog />
      </main>
      <Footer />
    </PageTransition>
  );
}
