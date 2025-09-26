import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Projects as ProjectsSection } from "@/components/sections/projects";
import { PageTransition } from "@/components/page-transition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
