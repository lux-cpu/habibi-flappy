import { useCallback, useEffect, useRef } from 'react';

export const useGameLoop = (callback, isRunning) => {
  const frameRef = useRef();
  const lastTimeRef = useRef();
  const callbackRef = useRef(callback);

  // Always use the latest callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const loop = useCallback((time) => {
    // Initialize lastTime on first run
    if (!lastTimeRef.current) {
      lastTimeRef.current = time;
    }
    
    // Calculate delta time for consistent movement
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    // Execute game logic
    callbackRef.current(deltaTime);

    // Continue the loop
    frameRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    if (isRunning) {
      lastTimeRef.current = undefined; // Reset time tracking
      frameRef.current = requestAnimationFrame(loop);
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isRunning, loop]);
};