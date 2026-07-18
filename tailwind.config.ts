import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

     keyframes: {
  floatLeftTop: {
    "0%,100%": {
      transform: "translateY(0px) rotate(-12deg)",
    },
    "25%": {
      transform: "translateY(-12px) rotate(-10deg)",
    },
    "50%": {
      transform: "translateY(-18px) rotate(-13deg)",
    },
    "75%": {
      transform: "translateY(-8px) rotate(-11deg)",
    },
  },

  floatLeftBottom: {
    "0%,100%": {
      transform: "translateY(0px) rotate(-6deg)",
    },
    "25%": {
      transform: "translateY(8px) rotate(-5deg)",
    },
    "50%": {
      transform: "translateY(15px) rotate(-7deg)",
    },
    "75%": {
      transform: "translateY(5px) rotate(-4deg)",
    },
  },

  floatRightTop: {
    "0%,100%": {
      transform: "translateY(0px) rotate(9deg)",
    },
    "25%": {
      transform: "translateY(-10px) rotate(7deg)",
    },
    "50%": {
      transform: "translateY(-18px) rotate(11deg)",
    },
    "75%": {
      transform: "translateY(-6px) rotate(8deg)",
    },
  },

  floatRightBottom: {
    "0%,100%": {
      transform: "translateY(0px) rotate(6deg)",
    },
    "25%": {
      transform: "translateY(10px) rotate(5deg)",
    },
    "50%": {
      transform: "translateY(16px) rotate(8deg)",
    },
    "75%": {
      transform: "translateY(6px) rotate(4deg)",
    },
  },
},

animation: {
  "float-left-top": "floatLeftTop 7s ease-in-out infinite",
  "float-left-bottom": "floatLeftBottom 8s ease-in-out infinite",
  "float-right-top": "floatRightTop 7.5s ease-in-out infinite",
  "float-right-bottom": "floatRightBottom 8.5s ease-in-out infinite",
},


      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors from Figma
        "skill-blue": {
          DEFAULT: "#00418d",
          dark: "#042578",
          medium: "#0c2274",
          light: "#335f92",
          lighter: "#c3dfff",
          lightest: "#c4e3ff",
        },
        "skill-red": {
          DEFAULT: "#f73e5d",
        },
        "skill-yellow": {
          DEFAULT: "#f6c648",
        },
        "skill-gray": {
          DEFAULT: "#d9d9d9",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

