"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Monkey-patch Element.prototype.scrollIntoView to use Lenis for smooth scroll actions
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (options) {
      if (options && (options as any).behavior === "smooth") {
        lenis.scrollTo(this);
      } else {
        originalScrollIntoView.call(this, options);
      }
    };

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      Element.prototype.scrollIntoView = originalScrollIntoView;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <>{children}</>;
}
