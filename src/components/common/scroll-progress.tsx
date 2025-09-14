"use client";

import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(winHeightPx > 0 ? parseFloat(scrolled) : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[150]">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
