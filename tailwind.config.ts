import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        slate: "#4B5563",
        white: "#FFFFFF",
        teal: "#0F766E"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"]
      },
      boxShadow: {
        panel: "0 10px 30px -15px rgba(11, 31, 58, 0.22)",
        float: "0 4px 16px -4px rgba(11, 31, 58, 0.14), 0 20px 50px -20px rgba(11, 31, 58, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;