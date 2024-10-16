import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bannerBg: "var(--bannerBg)",
      },
      fontFamily: {
        anton: ["var(--font-anton)"],
        instrumentSans: ["var(--font-instrument-sans)"],
        instrumentSerif: ["var(--font-instrument-serif)"],
        francoisOne: ["var(--font-francois-one)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
