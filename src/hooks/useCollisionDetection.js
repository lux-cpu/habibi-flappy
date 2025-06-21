import { useCallback } from 'react';

export const useCollisionDetection = (birdSize, pipeWidth) => {
  return useCallback((bird, pipes, gameHeight) => {
    // Check ground/ceiling collision with 5px buffer
    if (bird.y <= -5 || bird.y >= gameHeight - birdSize + 5) {
      return true;
    }

    // Check pipe collisions with 2px buffer around bird
    return pipes.some(pipe => {
      const birdRight = bird.x + birdSize - 2;
      const birdLeft = bird.x + 2;
      const pipeRight = pipe.x + pipeWidth - 2;
      const pipeLeft = pipe.x + 2;
      
      const horizontalCollision = birdRight > pipeLeft && birdLeft < pipeRight;
      const verticalCollision = 
        (bird.y + 2 < pipe.topHeight) || 
        (bird.y + birdSize - 2 > pipe.topHeight + pipe.gap);

      return horizontalCollision && verticalCollision;
    });
  }, [birdSize, pipeWidth]);
};