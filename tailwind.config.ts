import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        "jello-vertical": "jello-vertical 0.8s ease   both",
      },
      keyframes: {
        "jello-vertical": {
          "0%,to": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(.75, 1.25, 1)",
          },
          "40%": {
            transform: "scale3d(1.25, .75, 1)",
          },
          "50%": {
            transform: "scale3d(.85, 1.15, 1)",
          },
          "65%": {
            transform: "scale3d(1.05, .95, 1)",
          },
          "75%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
