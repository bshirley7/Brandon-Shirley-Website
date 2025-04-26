/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'primary-light': '#333333',
        'primary-dark': '#000000',
        'surface': '#111111',
        'card': '#222222',
        'text-primary': '#FFFFFF',
        'text-secondary': '#CCCCCC',
        'text-muted': '#999999',
        'accent': '#FF0000',
        'accent-secondary': '#00FF00',
        'accent-tertiary': '#0000FF',
        'success': '#4CAF50',
        'warning': '#FFC107',
        'error': '#F44336',
        'info': '#2196F3',
      },
      keyframes: {
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        overlayHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideLeft: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideRight: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        slideDown: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' },
        },
      },
      animation: {
        slideLeftAndFade: 'slideLeftAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        overlayShow: 'overlayShow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeft: 'slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        slideRight: 'slideRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUp: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        slideDown: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
