'use client';

import React, { useState, useEffect } from 'react';

const colors = ['hsl(var(--primary))', 'hsl(var(--secondary))'];

interface SparklePiece {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
}

const Sparkle = ({ id, color, size, top, left, delay, duration }) => {
  const style = {
    '--sparkle-color': color,
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: delay,
    animationDuration: duration,
  };

  return (
    <div
      key={id}
      className="sparkle-wrapper"
      style={{ top, left }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        className="sparkle"
        style={style as React.CSSProperties}
      >
        <path
          d="M8 0L9.41421 6.58579L16 8L9.41421 9.41421L8 16L6.58579 9.41421L0 8L6.58579 6.58579L8 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export function Sparkles({ trigger }: { trigger: number }) {
  const [sparkles, setSparkles] = useState<SparklePiece[]>([]);

  useEffect(() => {
    if (trigger > 0) {
      const newSparkles: SparklePiece[] = Array.from({ length: 15 }).map(
        (_, i) => ({
          id: Date.now() + i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.floor(Math.random() * 20) + 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: `${Math.random() * 0.2}s`,
          duration: `${0.5 + Math.random() * 0.8}s`,
        })
      );
      setSparkles(newSparkles);

      const timer = setTimeout(() => setSparkles([]), 1500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="pointer-events-none absolute inset-[-2rem]">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
    </div>
  );
}
