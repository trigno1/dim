import { Handshake, Lightbulb, Pencil } from "lucide-react";

export function HowToContribute() {
  const features = [
    {
      icon: <Pencil className="w-8 h-8 mb-4 text-primary" />,
      title: "Submit an Article",
      description: "Share your expertise and insights with our community by submitting a blog post or article. We welcome well-researched and engaging content on a variety of legal topics.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 mb-4 text-primary" />,
      title: "Suggest a Topic",
      description: "Have an idea for a blog post but don't have the time to write it? Suggest a topic, and our team of writers will consider it for a future article.",
    },
    {
      icon: <Handshake className="w-8 h-8 mb-4 text-primary" />,
      title: "Become a Partner",
      description: "If you're a legal professional or organization, we're open to collaboration. Partner with us to share your resources and reach a wider audience.",
    },
  ]

  return (
    <section id="contribute" className="bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            How You Can Be a Part
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Join our mission to make legal knowledge accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 border border-border/20 rounded-lg bg-background shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
