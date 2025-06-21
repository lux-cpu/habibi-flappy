import React from 'react';
import { useGameState } from './hooks/useGameState';
import GameArea from './components/GameArea';
import ScoreDisplay from './components/ScoreDisplay';
import GameControls from './components/GameControls';
import './styles/App.css';

export default function App() {
  const {
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
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center p-4">
      <ScoreDisplay score={score} highScore={highScore} />
      
      <GameControls 
        gameState={gameState}
        onPause={pauseGame}
        onResume={resumeGame}
      />

      <GameArea
        gameState={gameState}
        setGameState={gameState === 'playing' ? endGame : startGame}
        bird={bird}
        setBird={setBird}
        score={score}
        setScore={setScore}
        highScore={highScore}
      />

      <div className="mt-4 text-center text-cyan-300 text-sm">
        <p>Click or press Space to jump | Press P to pause</p>
        <p className="text-xs mt-1">Navigate through the cyber energy barriers!</p>
      </div>
    </div>
  );
}