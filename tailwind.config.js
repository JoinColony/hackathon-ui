/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        488: '488px',
      },
      colors: {
        white: '#fff',
        'light-gray-300': '#d0d5dd',
        'light-gray-700': '#344054',
        'light-gray-600': '#475467',
        'light-gray-200': '#e4e7ec',
        'light-gray-900': '#101828',
        'gray-500': '#667085',
        'light-blue-100': '#EFF8FF',
        'light-blue-400': '#2962ff',
        'light-green-100': '#ECFDF3',
        'light-green-400': '#039855',
        'gray-50': '#f9fafb',
        'light-base-black': '#000',
        'light-base-sprite': 'rgba(52, 52, 52, 0.5)',
      },
      fontFamily: 'Inter',
      borderRadius: {
        '21xl': '40px',
      },
    },
  },
};
