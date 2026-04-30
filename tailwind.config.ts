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
          navy: "#050D18",
          slate: "#94A3B8",
          card: "#0D1E31",
          steel: "#091520",
        white: "#FFFFFF",
        teal: "#14B8A6"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"]
      },
      boxShadow: {
        panel: "0 8px 20px -18px rgba(0, 0, 0, 0.9)",
        float: "0 4px 14px -12px rgba(0, 0, 0, 0.9)"
      }
    }
  },
  plugins: []
};

export default config;