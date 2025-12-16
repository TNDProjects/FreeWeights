/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',   // Small tablets and large phones (landscape)
        md: '768px',  // Tablets
        lg: '1024px',  // Laptops and small desktops
        xl: '1280px',  // Desktops
        '2xl': '1536px', // Large desktops
      },
      colors: {
        transparent: 'transparent',
        dark: 'rgba(18, 18, 18, 1)',
        light: '#EAEAEA',
        grey: '#757575',
      }, 
      fontFamily: {
        mono: ['Fragment Mono', 'monospace']
      },
      borderRadius: {
        'sm': '.5rem',
        DEFAULT: '.75rem',
        'lg': '1rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

