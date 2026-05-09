"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadyLoaded = sessionStorage.getItem("wayfind-loaded");

    if (alreadyLoaded || reduceMotion) {
      setVisible(false);
      sessionStorage.setItem("wayfind-loaded", "1");
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + Math.random() * 8 + 4);
      setCount(Math.floor(current));
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("wayfind-loaded", "1");
        }, 350);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0A0A0A",
            color: "#FAFAF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 6vw",
            zIndex: 10000,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            WayFind&nbsp;/&nbsp;Loading
          </span>
          <motion.span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 14vw, 12rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {String(count).padStart(3, "0")}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
