import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Testimonials as TestimonialsSection } from "@/components/sections/testimonials";
import { PageTransition } from "@/components/page-transition";

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <TestimonialsSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
