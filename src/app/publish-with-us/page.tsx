import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { PageTransition } from "@/components/page-transition";
import { SubmissionForm } from "@/components/sections/submission-form";
import { SubmissionGuidelines } from "@/components/sections/submission-guidelines";
import { Separator } from "@/components/ui/separator";

export default function PublishWithUsPage() {
  return (
    <PageTransition>
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Publish Your Work With Us</h1>
                <p className="mt-2 text-lg text-foreground/80 max-w-3xl mx-auto">
                    Become a contributor to Legal Verse and share your expertise with a dedicated audience of legal professionals, students, and enthusiasts.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <SubmissionGuidelines />
                <SubmissionForm />
            </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
