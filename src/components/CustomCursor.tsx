"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  distance: number;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Instantly responsive coordinates for the inner dot
  const [rawCoords, setRawCoords] = useState({ x: -100, y: -100 });

  // Spring configuration for the trailing outer ring
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setRawCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => {
      setIsClicking(true);
      // Spawn burst particles on click
      const newParticles: Particle[] = Array.from({ length: 8 }).map((_, idx) => {
        const colors = ["#7c3aed", "#d946ef", "#a78bfa", "#f472b6", "#38bdf8"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return {
          id: Date.now() + idx,
          x: rawCoords.x,
          y: rawCoords.y,
          color: randomColor,
          angle: (idx * 45 * Math.PI) / 180 + (Math.random() * 0.2 - 0.1),
          distance: 40 + Math.random() * 40,
        };
      });
      setParticles((prev) => [...prev, ...newParticles].slice(-24));
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Add listeners to clickable elements
    const updateClickables = () => {
      const clickables = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], .hover-magnetic"
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    };

    updateClickables();

    // Re-check periodically or on DOM changes to bind new elements
    const observer = new MutationObserver(updateClickables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible, rawCoords.x, rawCoords.y]);

  // Clean up particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(8));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  if (!isVisible) return null;

  return (
    <>
      {/* Click Burst Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
            initial={{ x: p.x - 5, y: p.y - 5, scale: 1, opacity: 1 }}
            animate={{
              x: p.x - 5 + Math.cos(p.angle) * p.distance,
              y: p.y - 5 + Math.sin(p.angle) * p.distance,
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ backgroundColor: p.color }}
          />
        ))}
      </AnimatePresence>

      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border-2 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovering ? "#d946ef" : "#7c3aed",
          boxShadow: isHovering
            ? "0 0 15px rgba(217, 70, 239, 0.4)"
            : "0 0 10px rgba(124, 58, 237, 0.2)",
        }}
        animate={{
          scale: isHovering ? 1.6 : isClicking ? 0.8 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Inner Active Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: rawCoords.x,
          y: rawCoords.y,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHovering ? "#7c3aed" : "#d946ef",
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      />
    </>
  );
}
