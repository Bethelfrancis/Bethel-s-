"use client";

import { useState, useEffect } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // LinkedIn-style: quick start, crawls at end
      const eased = raw < 0.7
        ? raw * 1.2
        : 0.84 + (raw - 0.7) * 0.5;

      setProgress(Math.min(eased * 100, 100));

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);

        // 300ms pause at 100%, then slide up
        setTimeout(() => setExiting(true), 300);

        // Unmount after slide-up completes
        setTimeout(() => setUnmounted(true), 1200);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (unmounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 400,
          letterSpacing: "-0.5px",
          color: "#111",
          marginBottom: "28px",
          animation: "fadeInUp 600ms ease-out forwards",
        }}
      >
        Bethel
      </div>

      {/* Progress bar track */}
      <div
        style={{
          width: "140px",
          height: "3px",
          backgroundColor: "#e0e0e0",
          borderRadius: "999px",
          overflow: "hidden",
          animation: "fadeIn 400ms ease-out 300ms forwards",
          opacity: 0,
        }}
      >
        {/* Moving shimmer fill — LinkedIn style */}
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            borderRadius: "999px",
            background: "linear-gradient(90deg, #0a66c2 0%, #378fe9 60%, #cce4ff 100%)",
            transition: "width 16ms linear",
            position: "relative",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;