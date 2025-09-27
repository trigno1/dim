import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenSquare } from "lucide-react";

export function SubmitCta() {
  return (
    <section id="submit-cta" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <PenSquare className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Want to Submit Your Own Article or Blog?
        </h2>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          We are always looking for fresh perspectives and insightful analysis. Share your work with our growing community.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/publish-with-us">Submit Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
