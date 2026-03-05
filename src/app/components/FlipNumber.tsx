import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface FlipNumberProps {
  value: string;
  className?: string;
}

export function FlipNumber({ value, className }: FlipNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number and non-number parts
  // "15,000+" -> numericValue: 15000, suffix: "+"
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, ""); 
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas and append suffix
        // If the original string had a prefix (e.g. $), this simplistic logic puts it at the end
        // But for "15,000+", it works perfectly.
        const formatted = Math.floor(latest).toLocaleString();
        ref.current.textContent = `${formatted}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  // Initial render content to avoid layout shift before hydration/animation
  return <span ref={ref} className={`inline-block relative ${className || ''}`} style={{ position: 'relative' }}>0{suffix}</span>;
}
