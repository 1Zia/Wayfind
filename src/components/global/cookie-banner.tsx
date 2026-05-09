"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("wayfind-cookies");
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss(value: "accept" | "decline") {
    localStorage.setItem("wayfind-cookies", value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            left: 16,
            right: 16,
            bottom: 16,
            margin: "0 auto",
            maxWidth: 720,
            background: "var(--color-card)",
            color: "var(--color-card-foreground)",
            border: "1px solid var(--color-border)",
            borderRadius: 14,
            padding: "16px 20px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
            zIndex: 70,
            backdropFilter: "blur(12px)",
          }}
        >
          <p
            style={{
              flex: "1 1 280px",
              fontSize: 14,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            We use cookies to improve your experience and analyze traffic. Read
            our{" "}
            <a href="/privacy" style={{ textDecoration: "underline" }}>
              privacy policy
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            <button
              type="button"
              onClick={() => dismiss("decline")}
              data-cursor-hover
              style={{
                padding: "9px 16px",
                fontSize: 13,
                background: "transparent",
                color: "var(--color-muted-foreground)",
                border: "1px solid var(--color-border)",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => dismiss("accept")}
              data-cursor-hover
              style={{
                padding: "9px 18px",
                fontSize: 13,
                fontWeight: 500,
                background: "var(--color-foreground)",
                color: "var(--color-background)",
                border: "none",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Accept all
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
