/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#020617",
          800: "#0f172a",
          700: "#1e293b",
        },
        cyan: {
          400: "#22d3ee",
        },
      },
    },
  },
  plugins: [],
};