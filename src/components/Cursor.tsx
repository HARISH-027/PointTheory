"use client";

import { useEffect, useState, useCallback } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

let isServer = true;

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    isServer = false;
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.documentElement.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    });

    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.removeEventListener("mouseover", () => {});
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isServer) return null;

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: isVisible ? `${x}px` : "-50px",
          top: isVisible ? `${y}px` : "-50px",
          transform: isVisible ? "translate(-50%, -50%)" : undefined,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: isVisible ? `${x}px` : "-50px",
          top: isVisible ? `${y}px` : "-50px",
          transform: isVisible ? "translate(-50%, -50%)" : undefined,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
