import { useState, useEffect, useCallback } from 'react';
import { BIRD, GAME } from '../lib/constants';

export const useGameState = () => {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'paused', 'gameOver'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('flappyBirdHighScore') || '0');
  });
  const [bird, setBird] = useState({ x: 100, y: GAME.HEIGHT/2, velocity: 0 });

  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setBird({ x: 100, y: GAME.HEIGHT/2, velocity: BIRD.JUMP_STRENGTH });
  }, []);

  const pauseGame = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('paused');
    }
  }, [gameState]);

  const resumeGame = useCallback(() => {
    if (gameState === 'paused') {
      setGameState('playing');
    }
  }, [gameState]);

  const endGame = useCallback(() => {
    setGameState('gameOver');
    if (score > highScore) {
      localStorage.setItem('flappyBirdHighScore', score.toString());
      setHighScore(score);
    }
  }, [score, highScore]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && gameState === 'playing') {
        setBird(prev => ({ ...prev, velocity: BIRD.JUMP_STRENGTH }));
      } else if (e.code === 'KeyP') {
        if (gameState === 'playing') pauseGame();
        else if (gameState === 'paused') resumeGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, pauseGame, resumeGame]);

  return {
    gameState,
    score,
    highScore,
    bird,
    setBird,
    setScore,
    startGame,
    pauseGame,
    resumeGame,
    endGame
  };
};