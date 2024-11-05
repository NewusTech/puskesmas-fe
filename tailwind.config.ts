import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#F7FAF6",
          200: "#EDF3EA",
          300: "#DFEADA",
          400: "#CEDFC6",
          500: "#B8D1AC",
          600: "#9EC08F",
          700: "#80AC6C",
          800: "#456237",
          900: "#22311C",
        },
        secondary: {
          100: "#FFFFF9",
          200: "#FFFFF1",
          300: "#FFFFE7",
          400: "#FEFFD9",
          500: "#FEFFC8",
          600: "#FEFFB5",
          700: "#FDFF9E",
          800: "#D0D400",
          900: "#5A5B00",
        },
        info: {
          100: "#F0F6FD",
          200: "#DCECFB",
          300: "#C1DDF8",
          400: "#9FC9F4",
          500: "#74B2EF",
          600: "#4296E9",
          700: "#1975D2",
          800: "#0E4277",
          900: "#072440",
        },
        success: {
          100: "#F1F9F2",
          200: "#E0F3E1",
          300: "#C7E9C9",
          400: "#A8DCAB",
          500: "#82CD86",
          600: "#55BB5A",
          700: "#398E3D",
          800: "#215324",
          900: "#133015",
        },
        warning: {
          100: "#FFF9EF",
          200: "#FFF2DB",
          300: "#FFE8BF",
          400: "#FFDA9B",
          500: "#FFCA70",
          600: "#FFB73C",
          700: "#FFA100",
          800: "#8E5A00",
          900: "#4A2F00",
        },
        error: {
          100: "#FCF2F2",
          200: "#F9E2E2",
          300: "#F4CBCB",
          400: "#EEAEAE",
          500: "#E68B8B",
          600: "#DE6161",
          700: "#D33131",
          800: "#771919",
          900: "#3D0D0D",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
