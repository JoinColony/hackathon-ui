/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'light-gray-300': '#d0d5dd',
        'light-gray-700': '#344054',
        'light-gray-600': '#475467',
        'light-gray-200': '#e4e7ec',
        'light-gray-900': '#101828',
        'gray-500': '#667085',
        'light-blue-400': '#2962ff',
        'gray-50': '#f9fafb',
        'light-base-black': '#000',
        'light-base-sprite': 'rgba(52, 52, 52, 0.5)',
      },
      fontFamily: 'Inter',
      borderRadius: {
        '21xl': '40px',
      },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      '5xl': '24px',
      base: '16px',
    },
  },
};
