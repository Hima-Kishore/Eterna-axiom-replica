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
        // The Main Page Background (#06070B)
        background: "#06070B",
        "surface-dark": "#101114",
        
        // Card Backgrounds (Derived from bg-secondary & tertiary)
        card: {
          DEFAULT: "#101114", // --background-secondary
          hover: "#18181A",   // --background-tertiary
          border: "#1f1f23",  // --border-subtle (approx)
        },

        // Text Colors
        text: {
          primary: "#FCFCFC",   // --text-primary (White)
          secondary: "#C8C9D1", // --text-secondary (Light Gray)
          tertiary: "#777A8C",  // --text-tertiary (Dark Gray/Muted)
        },

        // Brand Colors
        brand: {
          blue: "#526FFF",       // --primary-color (The main Action Blue)
          blueHover: "#6683FF",  // --primary-color-hover
        },

        // Status Colors (The "Pulse" Indicators)
        status: {
          increase: "#2FE3AC",      // --increase (Green)
          increaseHover: "#5BE7BD", // --increase-hover
          decrease: "#EC397A",      // --decrease (Red)
          decreaseHover: "#F8649A", // --decrease-hover
        }
      },
      fontFamily: {
        // We will stick to the default sans for now, or add Inter later
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Custom tiny font sizes for the "Audit" icons seen in screenshot
        xxs: '0.625rem', // 10px
      }
    },
  },
  plugins: [],
};
export default config;
