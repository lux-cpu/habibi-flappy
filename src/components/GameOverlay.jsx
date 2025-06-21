import React from 'react';

export default function GameOverlay({ gameState, score, highScore, showHighScorePopup, onRestart }) {
  return (
    <>
      {gameState === 'menu' && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-cyan-300 game-overlay">
          <h2 className="text-3xl font-bold mb-4 score-display futuristic-title text-cyan-400">Cyber Flappy</h2>
          <p className="text-lg mb-4">Click or press Space to start!</p>
          <button 
            onClick={onRestart}
            className="bg-cyan-500 hover:bg-cyan-600 text-black pulse-button px-4 py-2 rounded-lg"
          >
            Start Game
          </button>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-cyan-300 game-overlay">
          <h2 className="text-3xl font-bold mb-2 score-display futuristic-title text-red-400">System Failure!</h2>
          <p className="text-xl mb-2 score-display">Score: {score}</p>
          {score === highScore && score > 0 && (
            <p className="text-lg mb-4 text-cyan-400 score-display">New High Score!</p>
          )}
          <button 
            onClick={onRestart}
            className="bg-cyan-500 hover:bg-cyan-600 text-black pulse-button px-4 py-2 rounded-lg"
          >
            Restart System
          </button>
        </div>
      )}

      {showHighScorePopup && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center p-8 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-lg border-2 border-cyan-400 shadow-2xl high-score-popup">
            <h2 className="text-4xl font-bold mb-4 text-cyan-400 animate-pulse">
              🏆 RECORD BROKEN! 🏆
            </h2>
            <p className="text-2xl mb-4 text-yellow-400">
              You are great you break all records!
            </p>
            <p className="text-xl">
              New High Score: {score}
            </p>
          </div>
        </div>
      )}
    </>
  );
}