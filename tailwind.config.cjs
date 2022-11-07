/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#202024",
        "text-white": "#E1E1E6",
        "text-gray": "#7C7C8A",
        "foreground-gray": "#d9d9d90d",
      },
    },
  },
  plugins: [],
};
