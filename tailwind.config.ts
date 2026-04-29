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
        navy: "#07111F",
        slate: "#94A3B8",
        card: "#132238",
        steel: "#0D1B2A",
        white: "#FFFFFF",
        teal: "#14B8A6"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"]
      },
      boxShadow: {
        panel: "0 18px 42px -28px rgba(0, 0, 0, 0.82)",
        float: "0 6px 18px -12px rgba(0, 0, 0, 0.8), 0 22px 44px -26px rgba(0, 0, 0, 0.75)"
      }
    }
  },
  plugins: []
};

export default config;