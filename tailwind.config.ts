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
        background: "#06070B",
        "surface-dark": "#101114",
        
        card: {
          DEFAULT: "#101114",
          hover: "#18181A",
          border: "#1f1f23",
        },

        text: {
          primary: "#FCFCFC",
          secondary: "#C8C9D1",
          tertiary: "#777A8C",
        },

        brand: {
          primary: "#526FFF", 
          primaryHover: "#6683FF", 
        },

        status: {
          increase: "#22C55E",
          increaseHover: "#5BE7BD",
          decrease: "#EF4444",
          decreaseHover: "#F8649A",
        }
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  plugins: [],
};
export default config;
