/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F8F6',
        ink: '#141414',
        muted: '#5B5B5B',
        gold: '#C8A45C',
        'gold-hover': '#B38E42',
        border: '#EAEAEA',
        footer: '#141414'
      },
      fontFamily: {
        display: ['"Clash Display"', 'serif'],
        body: ['"General Sans"', 'sans-serif'],
        button: ['"Satoshi"', 'sans-serif'],
        number: ['"Space Grotesk"', 'monospace']
      },
      borderRadius: {
        card: '20px',
        pill: '30px'
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(20, 20, 20, 0.12)',
        lift: '0 20px 60px -15px rgba(20, 20, 20, 0.22)',
        gold: '0 0 0 0 rgba(200, 164, 92, 0)',
        'gold-glow': '0 8px 30px -6px rgba(200, 164, 92, 0.55)'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: []
}
