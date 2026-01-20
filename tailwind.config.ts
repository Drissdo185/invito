// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-top-left": {
          "0%": {
            opacity: "0",
            transform: "translate(-100px, -100px) scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0, 0) scale(1)",
          },
        },
        "slide-in-bottom-right": {
          "0%": {
            opacity: "0",
            transform: "translate(100px, 100px) scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0, 0) scale(1)",
          },
        },
        "fade-up-names": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-text": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-date": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-in-location": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "blossom-fade": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
        },
        "grow-line": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in-top-left": "slide-in-top-left 1s ease-out",
        "slide-in-bottom-right": "slide-in-bottom-right 1s ease-out",
        "fade-up-names": "fade-up-names 1s ease-out 0.3s backwards",
        "fade-in-text": "fade-in-text 1s ease-out 0.6s backwards",
        "fade-in-date": "fade-in-date 1s ease-out 0.9s backwards",
        "fade-in-location": "fade-in-location 1s ease-out 1.2s backwards",
        "blossom-fade": "blossom-fade 1.2s ease-out 0.4s backwards",
        "grow-line": "grow-line 0.8s ease-out 0.9s backwards",
        "fade-in": "fade-in 1.5s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;