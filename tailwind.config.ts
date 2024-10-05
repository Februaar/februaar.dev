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
        "gray-primary": "rgb(216, 216, 216)",
        "gray-dark": "rgb(188, 188, 188)",
        "blue-primary": "rgb(43, 96, 193, 0.1)",
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
