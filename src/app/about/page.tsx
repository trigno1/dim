import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { About as AboutSection } from "@/components/sections/about";
import { PageTransition } from "@/components/page-transition";

export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
