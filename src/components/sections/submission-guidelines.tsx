import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const guidelines = [
  { text: "Word Limit: 1000-3000 words for in-depth analysis and research." },
  { text: "Topics: We welcome articles on all legal areas, current events, and landmark cases." },
  { text: "Plagiarism: All submissions must be original. We have a zero-tolerance policy for plagiarism." },
  { text: "Tone & Style: Maintain a professional, clear, and objective tone. Cite sources appropriately." },
]

const processSteps = [
    { title: "Review Timeline", description: "Our editorial team will review your submission within 5-7 business days."},
    { title: "Confirmation", description: "You will receive an email confirming receipt, and another upon approval or if revisions are needed."},
    { title: "Editing & Publishing", description: "Our team may perform minor edits for clarity and style. We'll notify you before publishing."},
    { title: "Author Credit", description: "You receive full credit, with your name and provided professional links featured on the article."},
]

export function SubmissionGuidelines() {
  return (
    <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {guidelines.map(item => (
                        <li key={item.text} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Process After Submission</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {processSteps.map(step => (
                        <div key={step.title}>
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
