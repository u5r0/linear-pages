import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    keyframes: {
      "fade-in": {
        from: { opacity: '0', transform: 'translateY(-10px)' },
        to: { opacity: '1', transform: 'none' },
      },
      'image-glow': {
        '0%': {
          opacity: '0',
          'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
        },
        '10%': {
          opacity: '1',
          'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
        },
        '100%': {
          opacity: '0.2',
        },
      },
      "image-rotate": {
        '0%': { transform: 'rotateX(25deg)' },
        '25%': { transform: 'rotateX(25deg) scale(0.9)' },
        '60%': { transform: 'none' },
        '100%': { transform: 'none' },
      },
    },
    animation: {
      "fade-in": 'fade-in 1000ms ease var(--animation-delay, 0ms) backwards',
      "image-rotate": 'image-rotate 1400ms ease forwards',
      "image-glow": 'image-glow 4100ms 600ms ease-out forwards',
    },
    extend: {
      fontFamily: {
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      },
      colors: {
        white: '#fff',
        black: '#000212',
        brand: '#5e6ad2',
        gray: {
          100: 'rgba(255, 255, 255, 0.08)', // transparent white
          200: '#f7f8f8', // primary text
          300: '#b4bcd0', // off white
          400: '#858699', // gray
          500: '#222326', // gray dark
        },
        btn: {
          100: 'rgba(255, 255, 255, 0.05)',
          200: 'rgba(255, 255, 255, 0.1)',
          300: 'rgba(255, 255, 255, 0.2)',
        }
      },
      backgroundImage: {
        "page-gradient": 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)',
        "hero-gradient": 'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
        "hero-glow": 'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
      },
      boxShadow: {
        high: '0px 7px 32px rgba(0,0,0,.35)',
      },
      fontSize: {
        xs: ['0.8125rem', '1'],
        sm: ['0.875rem', '1'],
        md: ['1.125rem', '1.3'],
        lg: ['1.375rem', '1.3'],
        "4xl": ['2.75rem', '1'],
        "5xl": ['5rem', '1'],
      },  
      letterSpacing: {
        tightest: '-.056em',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        50: '12.5rem',
      },
      brightness: {
        115: '1.15',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ]
}
export default config
