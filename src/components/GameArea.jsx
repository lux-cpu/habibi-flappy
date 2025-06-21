import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useGameLoop } from '../hooks/useGameLoop';
import { useCollisionDetection } from '../hooks/useCollisionDetection';
import Bird from './Bird';
import Pipes from './Pipes';
import GameOverlay from './GameOverlay';
import { GAME, BIRD, PIPES } from '../lib/constants';

export default function GameArea({ gameState, setGameState, score, setScore, highScore, setHighScore }) {
  const [bird, setBird] = useState({ x: 100, y: 250, velocity: 0 });
  const [pipes, setPipes] = useState([]);
  const [showHighScorePopup, setShowHighScorePopup] = useState(false);
  const gameAreaRef = useRef();

  const generatePipe = useCallback((x) => {
    const pipeHeight = Math.random() * (GAME.HEIGHT - PIPES.GAP - 200) + 100;
    return {
      x,
      topHeight: pipeHeight,
      bottomY: pipeHeight + PIPES.GAP,
      passed: false
    };
  }, []);

  const initializePipes = useCallback(() => {
    return Array.from({ length: 3 }, (_, i) => generatePipe(GAME.WIDTH + i * 300));
  }, [generatePipe]);

  const jump = useCallback(() => {
    if (gameState === 'playing') {
      setBird(prev => ({ ...prev, velocity: BIRD.JUMP_STRENGTH }));
    }
  }, [gameState]);

  const checkCollision = useCollisionDetection(BIRD.SIZE, PIPES.WIDTH);

  const gameLoop = useCallback(() => {
    setBird(prev => {
      const newBird = {
        ...prev,
        y: prev.y + prev.velocity,
        velocity: prev.velocity + BIRD.GRAVITY
      };

      setPipes(prevPipes => {
        const updatedPipes = prevPipes.map(pipe => ({ ...pipe, x: pipe.x - PIPES.SPEED }));
        const visiblePipes = updatedPipes.filter(pipe => pipe.x > -PIPES.WIDTH);

        // Add new pipes if needed
        while (visiblePipes.length < 3) {
          const lastPipe = visiblePipes[visiblePipes.length - 1];
          visiblePipes.push(generatePipe(lastPipe ? lastPipe.x + 300 : GAME.WIDTH));
        }

        // Check scoring
        visiblePipes.forEach(pipe => {
          if (!pipe.passed && pipe.x + PIPES.WIDTH < newBird.x) {
            pipe.passed = true;
            setScore(prev => prev + 1);
          }
        });

        // Check collisions
        if (checkCollision(newBird, visiblePipes, GAME.HEIGHT)) {
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('flappyBirdHighScore', score.toString());
            setShowHighScorePopup(true);
            setTimeout(() => setGameState('gameOver'), 2000);
          } else {
            setGameState('gameOver');
          }
        }

        return visiblePipes;
      });

      return newBird;
    });
  }, [generatePipe, checkCollision, score, highScore, setScore, setHighScore, setGameState]);

  useGameLoop(gameLoop, gameState === 'playing');

  useEffect(() => {
    if (gameState === 'playing') {
      setBird({ x: 100, y: 250, velocity: 0 });
      setPipes(initializePipes());
    }
  }, [gameState, initializePipes]);

  const handleClick = () => {
    if (gameState === 'menu' || gameState === 'gameOver') {
      setGameState('playing');
      setScore(0);
    } else {
      jump();
    }
  };

  return (
    <div 
      ref={gameAreaRef}
      className="relative bg-gradient-to-b from-indigo-900 via-purple-800 to-black border-4 border-cyan-400 cursor-pointer select-none game-container game-area futuristic-game-area"
      style={{ width: GAME.WIDTH, height: GAME.HEIGHT }}
      onClick={handleClick}
    >
      <Bird x={bird.x} y={bird.y} velocity={bird.velocity} />
      <Pipes pipes={pipes} />
      <GameOverlay 
        gameState={gameState}
        score={score}
        highScore={highScore}
        showHighScorePopup={showHighScorePopup}
        onRestart={() => {
          setGameState('playing');
          setScore(0);
        }}
      />
    </div>
  );
}