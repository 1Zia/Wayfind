"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted to enable autoplay
    video.muted = true;
    
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented:", error);
          // Try again on any interaction if needed, but for background videos 
          // usually muted is enough.
        });
      }
    };

    // Try playing immediately
    playVideo();

    // Also try playing when metadata is loaded or when it can play
    video.addEventListener("canplay", playVideo);
    
    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      key={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
