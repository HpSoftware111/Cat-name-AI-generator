'use client';

import React, { useState, useEffect } from 'react';

const colors = ['#ff69b4', '#facc15', '#4ade80', '#60a5fa', '#c084fc'];

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
}

export function Confetti({ trigger }: { trigger: number }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger > 0) {
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }).map(
        (_, i) => ({
          id: i + Date.now(),
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 1}s`,
          duration: `${3 + Math.random() * 2}s`,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      );
      setPieces(newPieces);

      // Clean up old confetti pieces to prevent memory leaks
      const timer = setTimeout(() => setPieces([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (pieces.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={
            {
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              '--color': piece.color,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
