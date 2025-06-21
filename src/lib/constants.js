export const GAME = {
  WIDTH: 400,               // Game area width in pixels
  HEIGHT: 600,              // Game area height in pixels
  FPS: 60,                  // Target frames per second
  BACKGROUND: {
    TOP_COLOR: '#1a0033',    // Dark purple
    MID_COLOR: '#000066',    // Deep blue
    BOTTOM_COLOR: '#330066'  // Purple-blue
  },
  DIFFICULTY_INCREASE: 0.1, // How much speed increases per level
  MAX_DIFFICULTY: 3         // Maximum speed multiplier
};

export const BIRD = {
  SIZE: 40,                 // Bird width/height in pixels
  START_X: 100,             // Initial x position
  START_Y: 300,             // Initial y position
  GRAVITY: 0.6,             // Downward acceleration
  JUMP_STRENGTH: -10,       // Upward velocity when jumping
  ROTATION_MULTIPLIER: 3,   // How much velocity affects rotation
  MAX_ROTATION: 30          // Max rotation angle in degrees
};

export const PIPES = {
  WIDTH: 80,                // Pipe width in pixels
  GAP: 180,                 // Space between top and bottom pipes
  SPEED: 3,                 // Base movement speed
  SPAWN_RATE: 300,          // Distance between pipe pairs
  MIN_HEIGHT: 100,          // Minimum pipe height
  COLOR_TOP: '#00ffff',     // Cyan
  COLOR_BOTTOM: '#0080ff',  // Blue
  SHADOW_COLOR: 'rgba(138, 43, 226, 0.6)' // Purple shadow
};

export const COLORS = {
  PRIMARY: '#00ffff',       // Cyan
  SECONDARY: '#0080ff',     // Blue
  ACCENT: '#ff00ff',        // Magenta
  TEXT: '#ffffff',          // White
  BACKGROUND: '#000033',    // Dark blue
  SCORE: '#fbbf24',         // Yellow for high scores
  DANGER: '#ff0000'         // Red for collisions
};

export const GAME_STATES = {
  MENU: 'menu',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'gameOver'
};

export const LOCAL_STORAGE_KEYS = {
  HIGH_SCORE: 'flappyBirdHighScore'
};

// Physics constants
export const PHYSICS = {
  COLLISION_BUFFER: 2,      // Pixel buffer for collision detection
  BOUNDARY_BUFFER: 5        // Pixel buffer for top/bottom boundaries
};

// Animation durations in milliseconds
export const ANIMATION = {
  PIPE_MOVE: 200,
  BIRD_JUMP: 100,
  GAME_OVER: 500,
  HIGH_SCORE_POPUP: 2000
};