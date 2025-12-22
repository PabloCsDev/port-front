/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terminal: {
          green: '#00ff00',
          cyan: '#00ffff',
          purple: '#af00ff',
          yellow: '#ffff00',
          red: '#ff5555',
          blue: '#5555ff',
        },
        code: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          comment: '#8b949e',
          keyword: '#ff7b72',
          string: '#a5d6ff',
          number: '#79c0ff',
          function: '#d2a8ff',
        }
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) 1s 1 normal both',
        'typewriter-slow': 'typewriter 3s steps(20) 1s 1 normal both',
        'cursor': 'cursor .6s linear infinite alternate',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'terminal-load': 'terminal-load 1.5s ease-out forwards',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
          '100%': { boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'terminal-load': {
          '0%': { width: '0%', opacity: '0' },
          '50%': { width: '100%', opacity: '1' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
      fontFamily: {
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
