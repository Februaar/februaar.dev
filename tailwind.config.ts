import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "gray-primary": "rgb(216, 216, 216)",
        "gray-dark": "rgb(188, 188, 188)",
        "blue-primary": "rgba(43, 96, 193, 0.1)",
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
