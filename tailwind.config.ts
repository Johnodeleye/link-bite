import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon":'#00FF85', // Neon Green custom
        "charcoal": '#121212', 
        "plain" : '#f5f5f5',
        "purple": '#7d3c98',
      },
    },
  },
  plugins: [],
} satisfies Config;
