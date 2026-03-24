'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  scale?: boolean;
}

export function FadeIn({ children, className = "", delay = 0, direction = 'up', fullWidth = true, scale = false }: FadeInProps) {
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

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
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
