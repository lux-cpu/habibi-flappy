/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: '#00ffff',
          purple: '#8a2be2',
          dark: '#0f172a',
        },
      },
      animation: {
        'futuristic-glow': 'futuristicGlow 4s ease-in-out infinite alternate',
        'cyber-pulse': 'cyberpulse 2s infinite',
        'high-score-glow': 'highScoreGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        futuristicGlow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.7' },
        },
        cyberpulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)'
          },
        },
        highScoreGlow: {
          '0%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)'
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}