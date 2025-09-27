import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { PageTransition } from "@/components/page-transition";

export default function TermsOfServicePage() {
  return (
    <PageTransition>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              Welcome to our Terms of Service page. This is a placeholder. You should replace this content with your own terms.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
             <h2 className="font-headline text-2xl font-bold mt-8">User Conduct</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
