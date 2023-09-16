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
    },
    animation: {
      "fade-in": 'fade-in 1000ms ease var(--animation-delay, 0ms) backwards',
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
          200: 'rgba(255, 255, 255, 0.1)', // tertiary btn
          300: 'rgba(255, 255, 255, 0.2)', // tertiary btn hover
        }
      },
      backgroundImage: {
        "page-gradient": 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)',
        "hero-gradient": 'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
      },
      boxShadow: {
        high: '0px 7px 32px rgba(0,0,0,.35)',
      },
      fontSize: {
        xs: '0.8125rem',
        sm: '0.875rem',
        md: ['1.125rem', '1.3'],
        lg: ['1.375rem', '1.3'],
        "4xl": '2.75rem',
        "5xl": '5rem',
      },  
      letterSpacing: {
        tightest: '-.056em',
      },
      spacing: {
        30: '7.5rem',
        50: '12.5rem',
      },
      brightness: {
        115: '1.15'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ]
} satisfies Config
export default config
