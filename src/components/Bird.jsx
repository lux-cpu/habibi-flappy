import React, { useEffect, useRef } from 'react';
import { BIRD } from '../lib/constants';

export default function Bird({ x, y, velocity }) {
  const birdRef = useRef(null);
  
  // Smooth position updates with requestAnimationFrame
  useEffect(() => {
    const updatePosition = () => {
      if (birdRef.current) {
        birdRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
          Math.min(Math.max(velocity * 3, -30), 30)
        }deg)`;
      }
      requestAnimationFrame(updatePosition);
    };
    
    const frameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(frameId);
  }, [x, y, velocity]);

  return (
    <img
      ref={birdRef}
      src="/assets/images/futuristic-bird.png"
      alt="Cyber Bird"
      className="absolute bird-sprite bird-smooth"
      style={{
        width: BIRD.SIZE,
        height: BIRD.SIZE,
        left: 0,
        top: 0,
        willChange: 'transform',
        backfaceVisibility: 'hidden' // Improves animation performance
      }}
    />
  );
}