"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/utils";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello WayFind, I'd like to discuss a project",
  );
  const href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WayFind on WhatsApp"
      data-cursor-hover
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 54,
        height: 54,
        borderRadius: "50%",
        background: "#25D366",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
        zIndex: 60,
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "2px solid #25D366",
          animation: "pulse-soft 2.4s ease-in-out infinite",
          opacity: 0.5,
        }}
      />
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785a9.7 9.7 0 01-4.95-1.36l-.355-.21-3.677.964.982-3.583-.231-.367a9.683 9.683 0 01-1.488-5.165c.002-5.347 4.354-9.696 9.704-9.696a9.65 9.65 0 016.857 2.838 9.633 9.633 0 012.836 6.86c-.002 5.346-4.354 9.694-9.687 9.694l-.011.025zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.997 11.997 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411z" />
      </svg>
    </motion.a>
  );
}
