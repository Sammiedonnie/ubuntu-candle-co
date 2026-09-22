import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EEE1",
        espresso: "#2B1E15",
        terracotta: "#B0532E",
        bronze: "#A9834F",
        sand: "#E6D6BC",
        olive: "#6B6E48",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        "6xl-content": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
