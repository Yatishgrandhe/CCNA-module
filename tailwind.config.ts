import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gimkit: {
          blue: '#3B82F6',
          green: '#10B981',
          purple: '#8B5CF6',
          orange: '#F59E0B',
          red: '#EF4444',
          dark: '#1F2937',
        }
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-green': 'pulseGreen 0.6s ease-out',
        'pulse-red': 'pulseRed 0.6s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGreen: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#10B981' },
          '100%': { backgroundColor: 'transparent' },
        },
        pulseRed: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#EF4444' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
export default config
