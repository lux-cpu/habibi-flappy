import React from 'react';

export default function ScoreDisplay({ score, highScore, difficulty }) {
  return (
    <div className="text-center mb-4">
      <h1 className="text-4xl font-bold text-cyan-400 mb-2 score-display futuristic-title">
        Cyber Flappy
      </h1>
      <div className="text-cyan-300 text-lg score-display flex gap-4 justify-center">
        <span>Score: {score}</span>
        <span>High Score: {highScore}</span>
        {difficulty > 1 && (
          <span className="text-yellow-400">Level: {difficulty.toFixed(1)}x</span>
        )}
      </div>
    </div>
  );
}