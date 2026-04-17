'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  scale?: boolean;
}

export function FadeIn({ children, className = "", delay = 0, direction = 'up', fullWidth = true, scale = false }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [forceVisible, setForceVisible] = useState(false);

  // iOS Safari can emit a stale "not intersecting" reading on the first
  // IntersectionObserver callback before layout stabilises. With
  // viewport={{ once: true }} that stale reading gets locked in and the
  // element is stuck at opacity 0. If the element is already within the
  // viewport on mount, flip it visible directly.
  useEffect(() => {
    if (shouldReduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const reveal = () => setForceVisible(true);
    const check = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh && rect.bottom > 0) reveal();
    };
    check();
    const t = window.setTimeout(check, 120);
    return () => window.clearTimeout(t);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ width: fullWidth ? "100%" : "auto" }}>
        {children}
      </div>
    );
  }

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial: Record<string, number> = {
    opacity: 0,
    ...directions[direction],
  };

  if (scale) {
    initial.scale = 0.95;
  }

  const animate: Record<string, number> = { opacity: 1, x: 0, y: 0 };
  if (scale) {
    animate.scale = 1;
  }

  const motionProps = forceVisible
    ? { animate }
    : { whileInView: animate, viewport: { once: true, amount: 0.1 } };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      {...motionProps}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}
