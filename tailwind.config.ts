import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "rgb(216,216,216)",
        "gray-500": "rgb(188 188 188)",
      },
      width: {
        fit: "fit-content",
      },
      borderRadius: {
        sm: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
