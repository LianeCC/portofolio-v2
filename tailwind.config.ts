import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';


const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|link|navbar|ripple|spinner).js"
  ],

  theme: {
    extend: {
      fontFamily: {
        caption: ['var(--font-caption)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-vertical': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(150px)' },
        },
		    "scroll-left": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
        },
        "scroll-right": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(100%)" },
        },
        "marquee" : {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" }, // Décalage pour boucle infinie
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-vertical': 'slide-vertical 1.5s linear infinite',
		    "scroll-left": "scroll-left 10s linear infinite",
        "scroll-right": "scroll-right 10s linear infinite",
        "marquee" : "marquee 10s linear infinite",

      },
    },
  },
  plugins: [tailwindcssAnimate,heroui()],
};

export default config;
