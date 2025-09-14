"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Should be slightly less than animation duration to avoid flicker

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {isTransitioning && <TransitionElement />}
      <div
        className={cn(
          'transition-opacity duration-500',
          isTransitioning ? 'opacity-0' : 'opacity-100'
        )}
      >
        {children}
      </div>
    </div>
  );
}

const TransitionElement = () => {
  return (
    <>
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background animate-reveal">
      </div>
      <style jsx>{`
        @keyframes reveal {
          0% {
            clip-path: circle(150% at 50% 50%);
          }
          100% {
            clip-path: circle(0% at 50% 50%);
          }
        }
        .animate-reveal {
          animation: reveal 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </>
  );
};
