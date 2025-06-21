import React from 'react';
import { Pause, Play } from 'lucide-react';

export default function GameControls({ gameState, onPause, onResume }) {
  return (
    <div className="relative mb-4">
      {(gameState === 'playing' || gameState === 'paused') && (
        <button
          onClick={gameState === 'playing' ? onPause : onResume}
          className="bg-cyan-500 hover:bg-cyan-600 text-black px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          aria-label={gameState === 'playing' ? 'Pause' : 'Resume'}
        >
          {gameState === 'playing' ? <Pause size={16} /> : <Play size={16} />}
          {gameState === 'playing' ? 'Pause' : 'Resume'}
        </button>
      )}
    </div>
  );
}