import { FileCheck, MailCheck, UserPlus } from "lucide-react";

export function HowToContribute() {
  const steps = [
    {
      icon: <FileCheck className="w-10 h-10 mb-4 text-primary" />,
      title: "Step 1: Submit Your Blog or Article",
      description: "Submit your blog or article on your desired topic. Ensure it's original, well-researched, and not filled with false information.",
    },
    {
      icon: <MailCheck className="w-10 h-10 mb-4 text-primary" />,
      title: "Step 2: Review & Confirmation",
      description: "Our team will review your submission. If it meets our quality standards and guidelines, we will send you a confirmation email.",
    },
    {
      icon: <UserPlus className="w-10 h-10 mb-4 text-primary" />,
      title: "Step 3: Share Your Details",
      description: "Once approved, share your details like name, email, contact info, and LinkedIn profile. We'll feature them with your published piece.",
    },
  ]

  return (
    <section id="contribute" className="bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            How Can You Be A Part?
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Join Our Community of Legal Writers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={step.title} className="p-8 border border-border/20 rounded-lg bg-background shadow-lg relative">
               <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">{index+1}</div>
              <div className="mt-8">
                {step.icon}
                <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
