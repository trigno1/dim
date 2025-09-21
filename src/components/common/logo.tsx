import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      <path d="M16 16.5a2.5 2.5 0 0 0-5 0" />
      <path d="M8 16.5a2.5 2.5 0 0 1 5 0" />
      <path d="M12 7v12" />
      <path d="M4 16.5h16" />
      <path d="M12 3v4" />
      <path d="M6 5l-3 3" />
      <path d="M18 5l3 3" />
    </svg>
  );
}
