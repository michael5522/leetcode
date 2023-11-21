/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    minHeight: {
      'screen': '100vh',
      'half': '75vh'
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'ola': "url('assets/images/orange-bg.jpg')",
        'minicard': "url('assets/images/mini-card.jpg')",
        'bubbles': "url('assets/images/bubbles.jpg')",
        'splash': "url('assets/images/splash.svg')",
        'tree': "url('assets/images/tree.svg')",
        'skills': "url('assets/images/skills.png')",
        'watercolor': "url('assets/images/watercolor.jpg')",
        'ryzen': "url('assets/images/ryzen.png')"

      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '75%',
        '16': '4rem',
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
