/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "light-gray-300": "#d0d5dd",
        "light-gray-700": "#344054",
        "light-gray-600": "#475467",
        "light-gray-200": "#e4e7ec",
        "light-gray-900": "#101828",
        "gray-500": "#667085",
        "light-blue-400": "#2962ff",
        "gray-50": "#f9fafb",
        "light-base-black": "#000",
      },
      fontFamily: {
        "text-small-medium": "Inter",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
