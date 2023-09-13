import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        30: '7.5rem'
      },
      brightness: {
        115: '1.15'
      }
    },
  },
  plugins: [
    // plugin(function({ addVariant }) {
    //   addVariant('not-last', '&:not(:last-child)')
    //   addVariant('child', '& > *')
    // }),
  ]
}
export default config
