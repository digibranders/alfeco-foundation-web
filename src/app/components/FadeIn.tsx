'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  scale?: boolean;
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  fullWidth = true,
  scale = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh && rect.bottom > 0;
    };
    if (inViewport()) {
      setRevealed(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-fadein=""
      data-fadein-direction={direction}
      data-fadein-scale={scale ? 'true' : undefined}
      data-fadein-revealed={revealed ? 'true' : undefined}
      className={className}
      style={{
        width: fullWidth ? '100%' : 'auto',
        animationDelay: revealed && delay ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}
