/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"',
          '"Inter"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'
        ],
        mono: ['"SF Mono"', '"JetBrains Mono"', '"Fira Code"', 'monospace']
      },
      colors: {
        apple: {
          bg: '#000000',
          'bg-secondary': '#0d0d0d',
          card: 'rgba(255,255,255,0.05)',
          'card-hover': 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.08)',
          text: '#f5f5f7',
          'text-secondary': '#a1a1a6',
          'text-tertiary': '#6e6e73',
          accent: '#2997ff',
          'accent-light': '#40c8ff',
          purple: '#5e5ce6',
          'purple-light': '#bf5af2',
          green: '#30d158',
          orange: '#ff9f0a',
          red: '#ff453a',
          pink: '#ff375f',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(60px)' },
          '100%': { opacity: '0.8', filter: 'blur(80px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('light', '.light &')
    },
  ],
}
